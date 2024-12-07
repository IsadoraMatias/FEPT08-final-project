/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-yellow': '#FCF6BD',
        'custom-green': '#D0F4DE',
        'custom-purple': '#A5A2F2',
        'custom-pink': '#F2DCF1',
        'custom-purple-dark': '#4A39A8',
      },
    },
  },
  plugins: [],
}

