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
        "brand-red": "#FF0000", // Un rojo vivo
        "brand-black": "#000000",
        "brand-white": "#FFFFFF",
        "brand-gray": "#E5E7EB", // Ajustado a un gris más notable
      },
      animation: {
        "gradient-bg": "gradient-bg 15s ease infinite",
      },
      keyframes: {
        "gradient-bg": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
