export default {
  clearMocks: true,
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
    '\\.svg': './jest.config.ts',
    '^@/(.*)$': '<rootDir>/src/$1'
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
