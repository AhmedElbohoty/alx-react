const path = require('path');

module.exports = {
  setupFilesAfterEnv: ['./src/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/imageMock.js',
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',

    'components/(.*)': ['<rootDir>/src/components/$1'],
    'assets/(.*)': ['<rootDir>/src/assets/$1'],
    'utils/(.*)': ['<rootDir>/src/utils/$1'],
    'src/(.*)': ['<rootDir>/src/$1'],
  },
};
