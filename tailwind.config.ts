import type { Config } from "tailwindcss";
const { addIconSelectors } = require('@iconify/tailwind');


const config: Config = {
  mode: 'jit',
  darkMode: 'class',
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
    },
  },
  plugins: [
           // Iconify plugin, requires writing list of icon sets to load
           addIconSelectors(['mdi', 'mdi-light']),
  ],
};
export default config;
