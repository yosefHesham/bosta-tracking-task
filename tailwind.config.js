/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.jsx',
    './src/components/**/*.jsx',
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          primary: '#e30613'
        },
      },
    },
  },
  plugins: [],
}

