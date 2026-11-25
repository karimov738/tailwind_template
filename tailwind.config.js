import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
  ],
};