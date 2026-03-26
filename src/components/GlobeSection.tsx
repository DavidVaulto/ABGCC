"use client";

import { useRef, useEffect, useCallback, useMemo } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { CONTINENTS, BALKANS_INDEX } from "@/lib/continents";

const BALKANS = { lat: 42, lng: 21 };

const CONNECTIONS = [
  { name: "New York", lat: 40.7, lng: -74 },
  { name: "London", lat: 51.5, lng: -0.1 },
  { name: "Dubai", lat: 25.2, lng: 55.3 },
  { name: "Singapore", lat: 1.35, lng: 103.8 },
  { name: "Sydney", lat: -33.9, lng: 151.2 },
  { name: "São Paulo", lat: -23.5, lng: -46.6 },
  { name: "Tokyo", lat: 35.7, lng: 139.7 },
  { name: "Nairobi", lat: -1.3, lng: 36.8 },
];

function latLngTo3D(
  lat: number,
  lng: number,
  radius: number
): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return [x, y, z];
}

function rotateY(
  x: number,
  y: number,
  z: number,
  angle: number
): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x * cos - z * sin, y, x * sin + z * cos];
}

function project(
  x: number,
  y: number,
  z: number,
  rotAngle: number,
  cx: number,
  cy: number
): { sx: number; sy: number; depth: number } {
  const [rx, ry, rz] = rotateY(x, y, z, rotAngle);
  return { sx: cx + rx, sy: cy - ry, depth: rz };
}

// Point-in-polygon test (ray casting)
function pointInPolygon(
  lat: number,
  lng: number,
  polygon: [number, number][]
): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [yi, xi] = polygon[i];
    const [yj, xj] = polygon[j];
    if (yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

// Generate land dots by sampling a grid and checking against continent polygons
function generateLandDots(): { lat: number; lng: number; isBalkans: boolean }[] {
  const dots: { lat: number; lng: number; isBalkans: boolean }[] = [];
  const step = 2.5; // density of dots

  for (let lat = -70; lat <= 75; lat += step) {
    for (let lng = -180; lng < 180; lng += step) {
      let onLand = false;
      let onBalkans = false;

      for (let ci = 0; ci < CONTINENTS.length; ci++) {
        if (pointInPolygon(lat, lng, CONTINENTS[ci])) {
          onLand = true;
          if (ci === BALKANS_INDEX) {
            onBalkans = true;
          }
        }
      }

      if (onLand) {
        dots.push({ lat, lng, isBalkans: onBalkans });
      }
    }
  }
  return dots;
}

function getArcPoints(
  from: [number, number, number],
  to: [number, number, number],
  segments: number,
  height: number
): [number, number, number][] {
  const points: [number, number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const x = from[0] + (to[0] - from[0]) * t;
    const y = from[1] + (to[1] - from[1]) * t;
    const z = from[2] + (to[2] - from[2]) * t;
    const len = Math.sqrt(x * x + y * y + z * z);
    const lift = 1 + height * Math.sin(t * Math.PI);
    points.push([
      (x / len) * len * lift,
      (y / len) * len * lift,
      (z / len) * len * lift,
    ]);
  }
  return points;
}

export default function GlobeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(-1.8);
  const animFrameRef = useRef<number>(0);

  // Pre-compute land dots once
  const landDots = useMemo(() => generateLandDots(), []);

  const draw = useCallback(
    (canvas: HTMLCanvasElement, time: number) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.38;

      rotationRef.current += 0.0015;
      const rotY = rotationRef.current;

      ctx.clearRect(0, 0, w, h);

      // Atmospheric glow (outer)
      const atmoGrad = ctx.createRadialGradient(
        cx,
        cy,
        radius * 0.9,
        cx,
        cy,
        radius * 1.6
      );
      atmoGrad.addColorStop(0, "rgba(70, 140, 255, 0.07)");
      atmoGrad.addColorStop(0.4, "rgba(70, 140, 255, 0.03)");
      atmoGrad.addColorStop(1, "rgba(70, 140, 255, 0)");
      ctx.fillStyle = atmoGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Ocean sphere — dark blue with depth gradient
      const oceanGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        0,
        cx,
        cy,
        radius
      );
      oceanGrad.addColorStop(0, "#1a3a5c");
      oceanGrad.addColorStop(0.5, "#122d4a");
      oceanGrad.addColorStop(1, "#0d1f33");
      ctx.fillStyle = oceanGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Subtle specular highlight on sphere
      const specGrad = ctx.createRadialGradient(
        cx - radius * 0.3,
        cy - radius * 0.35,
        0,
        cx - radius * 0.3,
        cy - radius * 0.35,
        radius * 0.7
      );
      specGrad.addColorStop(0, "rgba(180, 210, 255, 0.12)");
      specGrad.addColorStop(0.5, "rgba(120, 170, 255, 0.04)");
      specGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = specGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Globe edge ring
      ctx.strokeStyle = "rgba(100, 160, 255, 0.2)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Clip to sphere
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      // Subtle graticule (grid lines)
      ctx.strokeStyle = "rgba(100, 160, 255, 0.06)";
      ctx.lineWidth = 0.5;
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let moved = false;
        for (let lng = 0; lng <= 360; lng += 4) {
          const [x, y, z] = latLngTo3D(lat, lng, radius);
          const p = project(x, y, z, rotY, cx, cy);
          if (p.depth < 0) {
            moved = false;
            continue;
          }
          if (!moved) {
            ctx.moveTo(p.sx, p.sy);
            moved = true;
          } else ctx.lineTo(p.sx, p.sy);
        }
        ctx.stroke();
      }
      for (let lng = -180; lng < 180; lng += 30) {
        ctx.beginPath();
        let moved = false;
        for (let lat = -80; lat <= 80; lat += 4) {
          const [x, y, z] = latLngTo3D(lat, lng, radius);
          const p = project(x, y, z, rotY, cx, cy);
          if (p.depth < 0) {
            moved = false;
            continue;
          }
          if (!moved) {
            ctx.moveTo(p.sx, p.sy);
            moved = true;
          } else ctx.lineTo(p.sx, p.sy);
        }
        ctx.stroke();
      }

      // Draw land dots
      const dotSize = radius * 0.012;
      for (const dot of landDots) {
        const [x, y, z] = latLngTo3D(dot.lat, dot.lng, radius);
        const p = project(x, y, z, rotY, cx, cy);
        if (p.depth <= 0) continue;

        // Lighting: brighter on front, dimmer on edges
        const depthFactor = Math.max(0, p.depth / radius);

        if (dot.isBalkans) {
          const alpha = 0.5 + 0.5 * depthFactor;
          ctx.fillStyle = `rgba(201, 168, 76, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, dotSize * 1.3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const brightness = 140 + Math.floor(100 * depthFactor);
          const alpha = 0.4 + 0.5 * depthFactor;
          ctx.fillStyle = `rgba(${brightness}, ${brightness + 30}, ${brightness + 50}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();

      // Balkans center pulse
      const [bx, by, bz] = latLngTo3D(BALKANS.lat, BALKANS.lng, radius);
      const bp = project(bx, by, bz, rotY, cx, cy);
      if (bp.depth > 0) {
        const pulseR = 8 + 5 * Math.sin(time * 0.003);
        const pulseAlpha = 0.25 + 0.2 * Math.sin(time * 0.003);
        const pulseGrad = ctx.createRadialGradient(
          bp.sx,
          bp.sy,
          0,
          bp.sx,
          bp.sy,
          pulseR * 2.5
        );
        pulseGrad.addColorStop(
          0,
          `rgba(201, 168, 76, ${pulseAlpha})`
        );
        pulseGrad.addColorStop(1, "rgba(201, 168, 76, 0)");
        ctx.fillStyle = pulseGrad;
        ctx.beginPath();
        ctx.arc(bp.sx, bp.sy, pulseR * 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(201, 168, 76, 0.95)";
        ctx.beginPath();
        ctx.arc(bp.sx, bp.sy, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Bright inner core
        ctx.fillStyle = "rgba(255, 230, 160, 0.9)";
        ctx.beginPath();
        ctx.arc(bp.sx, bp.sy, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connection arcs
      const balkan3D = latLngTo3D(BALKANS.lat, BALKANS.lng, radius);
      CONNECTIONS.forEach((conn, i) => {
        const dest3D = latLngTo3D(conn.lat, conn.lng, radius);
        const arcPoints = getArcPoints(balkan3D, dest3D, 40, 0.15);

        const speed = 0.0008 + i * 0.0001;
        const travelT = ((time * speed + i * 0.3) % 1);

        // Draw arc line with gradient opacity
        ctx.lineWidth = 1;
        let prevVisible = false;
        let prevP = { sx: 0, sy: 0 };
        for (let j = 0; j < arcPoints.length; j++) {
          const [ax, ay, az] = arcPoints[j];
          const ap = project(ax, ay, az, rotY, cx, cy);
          if (ap.depth > 0) {
            if (prevVisible) {
              const segAlpha = 0.15 + 0.1 * (ap.depth / radius);
              ctx.strokeStyle = `rgba(201, 168, 76, ${segAlpha})`;
              ctx.beginPath();
              ctx.moveTo(prevP.sx, prevP.sy);
              ctx.lineTo(ap.sx, ap.sy);
              ctx.stroke();
            }
            prevVisible = true;
            prevP = ap;
          } else {
            prevVisible = false;
          }
        }

        // Traveling dot
        const dotIdx = Math.floor(travelT * (arcPoints.length - 1));
        const [dx, dy, dz] = arcPoints[dotIdx];
        const dp = project(dx, dy, dz, rotY, cx, cy);
        if (dp.depth > 0) {
          // Trail
          for (let t = 1; t <= 5; t++) {
            const trailIdx = Math.max(0, dotIdx - t * 2);
            const [tx, ty, tz] = arcPoints[trailIdx];
            const tp = project(tx, ty, tz, rotY, cx, cy);
            if (tp.depth > 0) {
              ctx.fillStyle = `rgba(201, 168, 76, ${0.25 - t * 0.04})`;
              ctx.beginPath();
              ctx.arc(tp.sx, tp.sy, 2.5 - t * 0.35, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          // Glow
          const dotGrad = ctx.createRadialGradient(
            dp.sx,
            dp.sy,
            0,
            dp.sx,
            dp.sy,
            8
          );
          dotGrad.addColorStop(0, "rgba(255, 220, 120, 0.8)");
          dotGrad.addColorStop(0.5, "rgba(201, 168, 76, 0.3)");
          dotGrad.addColorStop(1, "rgba(201, 168, 76, 0)");
          ctx.fillStyle = dotGrad;
          ctx.beginPath();
          ctx.arc(dp.sx, dp.sy, 8, 0, Math.PI * 2);
          ctx.fill();

          // Core
          ctx.fillStyle = "rgba(255, 240, 180, 1)";
          ctx.beginPath();
          ctx.arc(dp.sx, dp.sy, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Destination dot
        const [ex, ey, ez] = dest3D;
        const ep = project(ex, ey, ez, rotY, cx, cy);
        if (ep.depth > 0) {
          const pR = 3 + 2 * Math.sin(time * 0.004 + i);
          const pA = 0.2 + 0.15 * Math.sin(time * 0.004 + i);
          ctx.fillStyle = `rgba(100, 170, 255, ${pA})`;
          ctx.beginPath();
          ctx.arc(ep.sx, ep.sy, pR, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "rgba(140, 200, 255, 0.8)";
          ctx.beginPath();
          ctx.arc(ep.sx, ep.sy, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Atmospheric edge shadow (inner rim darkening)
      const rimGrad = ctx.createRadialGradient(
        cx,
        cy,
        radius * 0.75,
        cx,
        cy,
        radius
      );
      rimGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
      rimGrad.addColorStop(0.8, "rgba(0, 10, 30, 0)");
      rimGrad.addColorStop(1, "rgba(0, 10, 30, 0.3)");
      ctx.fillStyle = rimGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      animFrameRef.current = requestAnimationFrame((t) => draw(canvas, t));
    },
    [landDots]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    animFrameRef.current = requestAnimationFrame((t) => draw(canvas, t));
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [draw]);

  return (
    <section className="bg-white py-24 lg:py-28 overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text */}
          <ScrollAnimation className="lg:w-1/2">
            <p className="text-brand-blue text-[11px] uppercase tracking-[3px] font-medium mb-4">
              Global Reach
            </p>
            <h2 className="text-navy text-[30px] md:text-[36px] lg:text-[38px] font-bold leading-[1.2] mb-6">
              Connecting Balkan opportunity to every corner of the world.
            </h2>
            <p className="text-gray-medium text-[17px] leading-[1.7] mb-8">
              Our network spans 40+ countries across Europe, the Americas,
              Asia-Pacific, and the Gulf. Every connection made through ABGCC is a
              step toward a more integrated, prosperous Balkan economy.
            </p>
            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {["40+ Countries", "500+ Members", "3 Annual Summits"].map(
                (stat) => (
                  <span
                    key={stat}
                    className="text-navy text-[13px] font-semibold border border-brand-blue/30 rounded-full px-5 py-2"
                  >
                    {stat}
                  </span>
                )
              )}
            </div>
          </ScrollAnimation>

          {/* Right: Animated 3D Globe */}
          <ScrollAnimation className="lg:w-1/2" delay={200}>
            <div className="relative w-full aspect-square max-w-[520px] mx-auto">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
