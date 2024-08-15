module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@router': './src/router',
          '@components': './src/components',
          '@types': './src/types',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
