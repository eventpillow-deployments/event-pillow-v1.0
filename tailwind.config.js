/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        moon: "moon 2s linear infinite",
        sun: "sun 5s linear infinite",
        typing: "typing 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
          },
          "50%": {
            "background-size": "200% 200%",
          },
        },
        moon: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(40deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        sun: {
          "100%": {
            transform: "rotate(1turn)",
          },
        },
        typing: {
          "100%": {
            width: "100%",
          },
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
        },
      },
    },
  },
  plugins: [],
};
