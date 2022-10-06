const {
  mergeConfig
} = require('vite');

const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite'
  },
  viteFinal: async config => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
          '~': path.resolve(__dirname, '../')
        }
      }
    });
  }
};