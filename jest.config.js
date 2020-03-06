module.exports = {
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transformIgnorePatterns: ['/node_modules\\/(?!(prismjs|vue-prism)\\/).*/'],
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/src/docs/__test__/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFilesAfterEnv: ['<rootDir>/src/docs/__test__/setup.js'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/docs/bundle.js',
    '!**/node_modules/**'
  ]
}
