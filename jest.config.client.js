module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    testMatch: [
      '<rootDir>/__tests__/client/*.(spec|test).(ts|tsx)'   
    ],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };