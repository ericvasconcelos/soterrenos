// lint-staged.config.js
module.exports = {
  // '**/*.{ts,tsx}': ['eslint --fix --max-warnings=0', 'prettier --write'],
  '**/*.{js,jsx}': ['eslint --fix --max-warnings=0', 'prettier --write'],
  '**/*.{md,json,css,scss}': 'prettier --write',
};
