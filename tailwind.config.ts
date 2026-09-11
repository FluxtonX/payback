import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-primary)",
          deep: "var(--brand-deep)",
          accent: "var(--brand-accent)",
          soft: "var(--brand-soft)",
          periwinkle: "var(--brand-periwinkle)",
          slate: "var(--brand-slate)",
        },
        pb: {
          navy: "var(--brand-primary)",
          deep: "var(--brand-deep)",
          blue: "var(--brand-accent)",
          soft: "var(--brand-soft)",
          periwinkle: "var(--brand-periwinkle)",
          slate: "var(--brand-slate)",
          grey: "#f4f4f4",
          body: "#616267",
          muted: "#a0a6ba",
          gold: "#ffd700",
          goldHover: "#ffe661",
          goldDark: "#f5d438",
          red: "#e22020",
          border: "#e6e6e6",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
        raleway: ["Raleway", "Arial", "sans-serif"],
      },
      maxWidth: {
        pb: "1208px",
        reading: "720px",
      },
      screens: {
        xs: "360px",
        sm: "414px",
        md: "768px",
        lg: "992px",
        xl: "1208px",
        "2xl": "1366px",
      },
      boxShadow: {
        dropdown: "0 4px 20px rgba(0, 0, 0, 0.1)",
        card: "0 2px 10px rgba(17, 33, 82, 0.06)",
        modal: "0 10px 30px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
