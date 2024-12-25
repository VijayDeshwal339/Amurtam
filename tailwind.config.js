/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'DIN': ['DINPro'],
        'Nun': ["Nunito"],
        'Poppin':["Poppins"],
        'Inter':["Inter"],
      },
      colors: {
        customGreen: '#F4F7EC',
        customTransparent: 'rgba(248, 248, 247, 0.46)',
      },
      screens: {
        'xs': '0px',
        'sm': '480px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};
