"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

export default function ScrollAnimation({
  children,
  className = "",
  threshold = 0.15,
  delay = 0,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("scroll-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div ref={ref} className={`scroll-hidden ${className}`}>
      {children}
    </div>
  );
}
