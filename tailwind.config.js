/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#FDF9FB',
      'secondary': '#F7F9FC',
      'secondary-primary': '#A8366F',
      'grey': '#6C757D',
      'border-color': '#040505',
      'hr-line': '#E0E3E3',
      'white-card-border':'#E9ECEF',
      'white': '#FFFFFF',
      'light-black': '#222823',
      'nav-color':"#1f1f1f",
      'black': '#000000',
    },
    fontFamily: {
      primary: ['var(--font-open-sans)', 'sans-serif'],
      secondary: ['var(--font-syne)', 'sans-serif'],
      arial: ['Arial', 'sans-serif'],
    },

    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'xs': {'min': '10px', 'max': '576px'},
        // Customize screen size for all mobile devices min-width: 10px and max-width:576px
        },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
