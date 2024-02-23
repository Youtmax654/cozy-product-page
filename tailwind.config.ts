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
        verdigris: "#3AA39F",
        "mikado-yellow": "#FFC41F",
        "space-cadet": "#17183B",
        "cool-grey": "#A2A3B1",
        "french-grey": "#D1D1D8",
        "imperial-red": "#E14B4B",
      },
    },
  },
  plugins: [],
};
export default config;
