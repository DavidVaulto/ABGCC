import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          secondary: "#0D2144",
          mid: "#1A3A6B",
        },
        brand: {
          blue: "#1A56DB",
          gold: "#C9A84C",
        },
        cta: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
        },
        gray: {
          light: "#F4F6F9",
          medium: "#6B7280",
          dark: "#111827",
          blue: "#94A3B8",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
        content: "1200px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "headline-in": "headlineIn 0.8s ease-out forwards",
        "headline-out": "headlineOut 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        headlineIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        headlineOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
