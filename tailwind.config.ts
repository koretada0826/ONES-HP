import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#020204",
          900: "#06060a",
          800: "#0c0c11",
          700: "#141419",
          600: "#1e1e24",
          500: "#2a2a31",
        },
        silver: {
          400: "#8b8b93",
          300: "#b7b7be",
          200: "#d4d4d9",
          100: "#eeeef1",
        },
        copper: {
          50: "#f7ece8",
          100: "#eed7ce",
          200: "#e1b8a9",
          300: "#d1a08d",
          400: "#c4897a",
          500: "#b06f5f",
          600: "#96594a",
          700: "#734339",
          800: "#4e2d26",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        jp: ["var(--font-jp)", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.14em",
        "widest-2": "0.28em",
        "widest-3": "0.42em",
      },
      keyframes: {
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-5%)" },
          "20%": { transform: "translate(-10%,5%)" },
          "30%": { transform: "translate(5%,-10%)" },
          "40%": { transform: "translate(-5%,15%)" },
          "50%": { transform: "translate(-10%,5%)" },
          "60%": { transform: "translate(15%,0)" },
          "70%": { transform: "translate(0,10%)" },
          "80%": { transform: "translate(-15%,0)" },
          "90%": { transform: "translate(10%,5%)" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "45%": { transform: "scaleY(1)", transformOrigin: "top" },
          "55%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
        scrollLine: "scrollLine 1.8s cubic-bezier(0.65,0,0.35,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
