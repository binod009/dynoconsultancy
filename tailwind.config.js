/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebarcolor: "#0f766e",
        headercolor: "#374151",
        green: "#15803D",
        headiconcolor: "#14b8a6",
      },
      animation: {
        notification: "notification 1.2s ease-in-out",
      },
      keyframes: {
        notification: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-35deg)",
          },
          "35%": {
            transform: "rotate(20deg)",
          },
          "45%": {
            transform: "rotate(-35deg)",
          },
          "55%": {
            transform: "rotate(20deg)",
          },
          "65%": {
            transform: "rotate(-35deg)",
          },
          "75%": {
            transform: "rotate(35deg)",
          },
          "85%": {
            transform: "rotate(-20deg)",
          },
          "95%": {
            transform: "rotate(35deg)",
          },
          "100%": {
            transform: "roate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
