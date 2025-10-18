// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}", // opcional, se tiver
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#f59e0b",   // âmbar-500
          primaryDark: "#d97706", // âmbar-600
          dark: "#0b1220",      // seu azul-escuro
        },
      },
    },
  },
  plugins: [],
};

export default config;
