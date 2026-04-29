import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22c55e", // green-500
          dark: "#16a34a",    // green-600
        },
        secondaryBg: "#eff6ff", // blue-50
        mainBg: "#f9fafb",      // gray-50
        cardBg: "#ffffff",
        textPrimary: "#1f2937", // gray-800
        textSecondary: "#4b5563", // gray-600
        borderColor: "#e5e7eb", // gray-200
      },
    },
  },
  plugins: [],
};

export default config;