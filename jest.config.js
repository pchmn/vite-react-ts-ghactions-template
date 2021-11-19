module.exports = {
  roots: ['<rootDir>/src/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/main.tsx'],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '(.*).d.ts$'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
    '^@app/(.*)$': '<rootDir>/src/app/$1'
  }
};
