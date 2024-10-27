/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "buttonShadow ": "0px 0px 50px 0px 0 4px 15px rgba(0, 5, 8, 0.8))",
      },
    },
  },
  plugins: [],
};
