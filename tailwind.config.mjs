import { brandTheme } from './brand/tailwind.brand.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      ...brandTheme.extend,
    },
  },
  plugins: [],
};
