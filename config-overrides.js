/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
module.exports = {
  jest(config) {
    config.collectCoverageFrom = [
      'client/**/*.{js,jsx,ts,tsx}',
      '!client/**/*.d.ts',
    ];
    config.testMatch = [
      '<rootDir>/client/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/client/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ];
    config.roots = ['<rootDir>/client'];
    return config;
  },

  // The paths config
  paths(paths, env) {
    paths.appIndexJs = paths.resolve(__dirname, 'client/index.js');
    paths.appSrc = paths.resolve(__dirname, 'client');
    return paths;
  },
};
