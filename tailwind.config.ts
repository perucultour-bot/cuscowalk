import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        negro: "#0B0B0C",
        "negro-soft": "#17171A",
        "negro-800": "#232326",
        amarillo: "#FFD400",
        "amarillo-600": "#E3BE00",
        "amarillo-100": "#FFF6D0",
        crema: "#FAF6EC",
        "crema-600": "#F1EADA",
        piedra: "#7C7669",
        "piedra-200": "#D8D2C4",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "2px",
        lg: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
