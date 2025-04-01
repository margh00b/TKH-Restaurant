import type { Config } from "tailwindcss";

const config: Config = {
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
      keyframes: {
        pulseColor: {
          "0%": { backgroundColor: "#ffa600" },
          "25%": { backgroundColor: "#ff6f00" },
          "50%": { backgroundColor: "#ff4d00" }, 
          "100%": { backgroundColor: "#ffa600" },
        },
      },
      animation: {
        "pulse-color": "pulseColor 2s ease-in-out infinite", 
      },
    },
  },
  plugins: [],
};
export default config;
