module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'npm run type-check',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': () => `npm run lint:js -- --fix --max-warnings 0`,
  // Run stylelint on changes to CSS files
  '**/*.css': filenames => `npm run lint:css -- --max-warnings 0 --fix ${filenames.join(' ')}`
}
