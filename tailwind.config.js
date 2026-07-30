/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Use withOpacity pattern: <alpha-value> lets Tailwind inject the opacity
        // so bg-primary/10, border-accent/30, text-textColor/60 etc. all work
        background: ({ opacityValue }) =>
          opacityValue !== undefined
            ? `rgba(var(--color-bg-rgb), ${opacityValue})`
            : 'rgb(var(--color-bg-rgb))',

        primary: ({ opacityValue }) =>
          opacityValue !== undefined
            ? `rgba(var(--color-primary-rgb), ${opacityValue})`
            : 'rgb(var(--color-primary-rgb))',

        accent: ({ opacityValue }) =>
          opacityValue !== undefined
            ? `rgba(var(--color-accent-rgb), ${opacityValue})`
            : 'rgb(var(--color-accent-rgb))',

        textColor: ({ opacityValue }) =>
          opacityValue !== undefined
            ? `rgba(var(--color-text-rgb), ${opacityValue})`
            : 'rgb(var(--color-text-rgb))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.8s ease-out forwards',
        'float':      'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
