/** @type {import('tailwindcss').Config} */
module.exports = {
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
        custom: {
          50: "#FBF9F6",
          100: "#F2E9DB",
          200: "#E4D4C4",
          300: "#31261D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-cormorant)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
