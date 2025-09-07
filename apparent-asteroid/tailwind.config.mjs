/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
  'background': '#0c1421',
  'text-primary': '#e6f1ff',
  'text-secondary': '#8892b0', // Add this line back
  'accent-blue': '#5798e4',
  'heading-blue': '#90b8e8',
      },
    },
  },
  plugins: [],
}