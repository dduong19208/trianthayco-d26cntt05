/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF7',
          100: '#FAF7F2',
          200: '#F3EFE6',
          300: '#E8E2D5',
        },
        navy: {
          DEFAULT: '#1B3B6F',
          dark: '#132A50',
          light: '#234C8E',
          deep: '#0F203D',
        },
        academic: {
          DEFAULT: '#2C5AA0',
          light: '#3C72C4',
          lighter: '#EBF2FC',
          dark: '#1F4278',
        },
        gold: {
          DEFAULT: '#F2B705',
          light: '#F5C63B',
          dark: '#C99602',
          warm: '#FFAA00',
        },
      },
      fontFamily: {
        handwriting: ['var(--font-charm)', 'var(--font-dancing)', 'cursive'],
        sans: ['var(--font-be-vietnam-pro)', 'sans-serif'],
      },
      boxShadow: {
        'polaroid': '0 10px 25px -5px rgba(27, 59, 111, 0.12), 0 8px 10px -6px rgba(27, 59, 111, 0.08)',
        'polaroid-hover': '0 20px 35px -5px rgba(27, 59, 111, 0.2), 0 12px 16px -6px rgba(27, 59, 111, 0.12)',
        'card-soft': '0 6px 20px rgba(27, 59, 111, 0.07)',
        'card-hover': '0 12px 30px rgba(27, 59, 111, 0.14)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(-1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
};
