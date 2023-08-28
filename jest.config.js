/** @type {import('jest').Config} */
// In your own jest-setup.js (or any other name)
import '@testing-library/jest-dom';

const config = {
  verbose: true,
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};

module.exports = config;
