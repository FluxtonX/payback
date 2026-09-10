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
        pb: {
          navy: "#112152",
          deep: "#030e31",
          blue: "#216ba5",
          soft: "#edf2ff",
          periwinkle: "#b7c3e8",
          slate: "#3e4761",
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
