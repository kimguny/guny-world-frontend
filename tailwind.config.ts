import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#fffff3",
        "kg-yellow": "#ffff86",
      },
      fontFamily: {
        skyBori: ["SkyBori", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-yellow": "linear-gradient(to right, #ffff86, #fffff3)",
        "gradient-yellow-hover": "linear-gradient(to right, #ffff86, #ffffe0)",
        "gradient-yellow-active": "linear-gradient(to right, #ffff86, #ffffcc)",
        "gradient-dark": "linear-gradient(to right, #333333, #111111)",
        "gradient-dark-hover": "linear-gradient(to right, #444444, #222222)",
        "gradient-dark-active": "linear-gradient(to right, #555555, #333333)",
      },
    },
  },
  plugins: [],
};
export default config;
