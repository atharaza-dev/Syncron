/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", // Add this line to include components folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: "PlusJakartaSans", // use this as 'font-cal'
        JakartaBold: "JakartaBold", // use this as 'font-cal'
        Cal: "CalSans", // use this as 'font-cal'
      },
      colors: {
        dark: "#1D201F",
        yellow: "#FFBC42",
      },
    },
  },
  plugins: [],
};
