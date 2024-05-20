module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@constants': './src/constants',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@state': './src/state',
            '@styles': './src/styles',
            '@utils': './src/utils',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
