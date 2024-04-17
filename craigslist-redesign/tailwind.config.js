/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        'cl2': '#9C4DCC',
        'cl1': '#38006B',
        'cl3': '#FFFFFF',
        'cl4': '#8D8D8D',
        'cl5': '#000000',
        'cl3-50': 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@material-tailwind/react'),
    require('@tailwindcss/forms'),
  ],
}
