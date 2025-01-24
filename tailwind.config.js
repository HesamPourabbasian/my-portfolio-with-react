/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        '700px':'700px',
        'mobile':{ max: '700px' },
      }
    },
  },
  plugins: [require("daisyui")],
};
