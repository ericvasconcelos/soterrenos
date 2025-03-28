// lint-staged.config.js
module.exports = {
  // Type check TypeScript files (executa uma única vez)
  '**/*.{ts,tsx}': () => 'concurrently "tsc --noEmit" "eslint ."',

  // Lint & format TS/JS files (executa nos arquivos staged)
  '**/*.{ts,tsx,js,jsx}': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
  

  // Format Markdown/JSON/CSS/etc
  '**/*.{md,json,css,scss}': (filenames) =>
    `prettier --write ${filenames.join(' ')}`,
};
