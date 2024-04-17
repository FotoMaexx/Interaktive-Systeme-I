/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'cl1': '#9C4DCC',
      'cl2': '#38006B',
      'cl3': '#FFFFFF',
      'cl4': '#8D8D8D',
      'cl5': '#000000',
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@material-tailwind/react'),
    require('@tailwindcss/forms'),
  ],
}