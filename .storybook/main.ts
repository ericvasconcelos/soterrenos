module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials', // Controls, Docs, Actions, etc.
    '@storybook/addon-a11y', // Accessibility
    'storybook-addon-aria-live', // Aria Live Regions
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
