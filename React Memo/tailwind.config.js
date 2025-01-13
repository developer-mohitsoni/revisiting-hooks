/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "parent-custom-red": "0px 0px 10px rgb(197, 6, 6)",
        "child-custom-blue": "0px 0px 10px rgb(27, 3, 107)",
      },
    },
  },
  plugins: [],
};
