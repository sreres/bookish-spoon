module.exports = {
    testEnvironment: 'node',
    testMatch: [
      '<rootDir>/__tests__/server/*.(spec|test).(ts|tsx)'
    ],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };
  