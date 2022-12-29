/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: theme => ({
        content: `calc(100vh - ${theme('spacing.14')})`
      }),
      minHeight: theme => ({
        content: `calc(100vh - ${theme('spacing.14')})`,
        14: theme('spacing.14')
      }),
      saturate: {
        25: '.25',
        75: '.75'
      },
      spacing: {
        120: '30rem',
        128: '32rem'
      },
      transitionProperty: {
        filter: 'filter'
      }
    }
  },
  plugins: []
}
