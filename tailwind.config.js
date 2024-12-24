module.exports = {
  content: [
    "./index.html",            
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        leScaleXIn: {
          from: {
            transform: 'perspective(400px) rotateX(90deg)',
            opacity: '0',
          },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        leScaleXIn: 'leScaleXIn 1s ease-in-out', // Customize the duration and timing
      },
    },
  },
  plugins: [],
};
