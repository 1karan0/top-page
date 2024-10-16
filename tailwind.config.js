/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-fast': 'float-fast 8s ease-in-out infinite',
        'float-rendom': 'float-rendom 6s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        'float-fast': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'float-rendom': {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
    },
  },
  plugins: [],
}