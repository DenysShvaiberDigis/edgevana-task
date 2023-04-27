/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-00': '#151F4E',
        'primary-01': '#2B3E9B',
        'primary-02': '#123FD2',

        'secondary-00': '#838AA9',
        'secondary-01': '#4B516A',
        'secondary-02': '#a9b1d1',
        'secondary-03': '#B9BFD9',
        'secondary-04': '#DCDFEF',

        'light-00': '#F3F4F9',
        'light-01': '#F2F4FC',
        'light-02': '#F5F5F5',
        'light-03': '#EDF1FF',
      },
    },
  },
  plugins: [],
};
