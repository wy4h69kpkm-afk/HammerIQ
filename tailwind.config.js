/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Graphite theme
        graphite: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#c0c0c0",
          400: "#a0a0a0",
          500: "#808080",
          600: "#606060",
          700: "#404040",
          800: "#252525",
          900: "#0a0a0a",
        },
        // Additional accent colors
        accent: {
          primary: "#00d9ff",
          secondary: "#ff6b6b",
          success: "#51cf66",
          warning: "#ffd93d",
          danger: "#ff6b6b",
        },
      },
      fontFamily: {
        sans: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
