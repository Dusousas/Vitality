import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "GreenP": "#3F7B86",
        "GreenS": "#CDDC48",
        "BlueP": "#293952",
        "GrayP": "#F0F2F3",

        "Rosa": "#da9fe5",
        "Roxo": "#390584"
        
      },
    },
  },
  plugins: [],
};
export default config;
