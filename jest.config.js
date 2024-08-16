module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|react-navigation|@react-navigation/.*|@react-native)/(?!react-redux/)',
  ],
  setupFiles: ['./jest.setup.js'],
};
