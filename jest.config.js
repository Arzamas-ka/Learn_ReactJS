module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__test__/config/importJestDOM.ts'],
  "transform": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$": "jest-transform-stub"
  },
  "moduleDirectories": [
    "src",
    "node_modules"
  ]
};
