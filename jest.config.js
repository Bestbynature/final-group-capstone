/** @type {import('jest').Config} */
// In your own jest-setup.js (or any other name)
import '@testing-library/jest-dom'
const config = {
  verbose: true,
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};

// In jest.config.js add (if you haven't already)
setupFilesAfterEnv: ['<rootDir>/jest-setup.js']

modulePathIgnorePatterns: ['node_modules/axios']


module.exports = config;
