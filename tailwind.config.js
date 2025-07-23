/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          400: '#5FFFD2', // Cool mint accent
        },
      },
    },
  },
  plugins: [],
};
