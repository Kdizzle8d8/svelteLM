/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#2D2C29',
        card: '#30302F',
        foreground: '#393937',
        primary: '#A4512B',
        border: '#6A665F40',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        mono: ['"Fira Code"', '"Fira Mono"', 'Menlo', 'Consolas', '"DejaVu Sans Mono"', 'monospace'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")]
}