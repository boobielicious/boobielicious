/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: theme => ({
        content: `calc(100vh - ${theme('spacing.16')})`
      }),
      minHeight: theme => ({
        content: `calc(100vh - ${theme('spacing.16')})`,
        16: theme('spacing.16')
      })
    }
  },
  plugins: []
}
