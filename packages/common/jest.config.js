/* eslint-disable */
const fs = require('fs');
const path = require('path');

const { exclude: _, ...swcJestConfig } = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', '..', '.swcrc'), 'utf-8')
);
swcJestConfig.swcrc = false;
// For Debugging
swcJestConfig.sourceMaps = 'inline';

module.exports = {
  displayName: 'common',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['@swc/jest', swcJestConfig],
  },
};
