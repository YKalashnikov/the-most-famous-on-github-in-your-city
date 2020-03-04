module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
      '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
        'jest-transform-stub',
      '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: [
      '<rootDir>/actions/__test__/*.(js|jsx|ts|tsx)',
      '<rootDir>/reducers/__test__/*.(js|jsx|ts|tsx)'
    ],
    
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  };