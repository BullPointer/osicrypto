/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '425px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        "cool-slide-in": {
          "0%": {
            width: "0px",
          },
          "100%": {
            width: "100%",
          },
        },
      },

      animation: {
        "cool-slide-in": "cool-slide-in 0.5s ease-in",
      },
    },
  },
  plugins: [],
};
