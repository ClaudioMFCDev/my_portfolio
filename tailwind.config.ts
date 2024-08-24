import type { Config } from "tailwindcss";
const { addIconSelectors } = require("@iconify/tailwind");

const config: Config = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        deepblue: {
          "50": "#f2f4ff",
          "100": "#e7e9ff",
          "200": "#d2d6ff",
          "300": "#aeb3ff",
          "400": "#8183ff",
          "500": "#534eff",
          "600": "#3c29fe",
          "700": "#2e18e9",
          "800": "#2613c4",
          "900": "#2212a0",
          "950": "#110979",
        },
      },
    },
  },
  plugins: [
    // Iconify plugin, requires writing list of icon sets to load
    addIconSelectors(["mdi", "mdi-light"]),
  ],
};
export default config;
