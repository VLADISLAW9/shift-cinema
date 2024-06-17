export default {
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  rootDir: '../../',
  modulePaths: ['<rootDir>src'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>configs/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>configs/jest/jestEmptyComponent.tsx',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@ui/(.*)$': '<rootDir>/src/shared/ui/$1',
    '^@lib/(.*)$': '<rootDir>/src/shared/lib/$1',
    '^@hooks/(.*)$': '<rootDir>/src/shared/lib/hooks/$1',
    '^@images/(.*)$': '<rootDir>/src/shared/assets/images/$1',
    '^@icons/(.*)$': '<rootDir>/src/shared/assets/icons/$1'
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports/unit',
        filename: 'report.html',
        openReport: true,
        inlineSource: true
      }
    ]
  ]
};
