module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg', '.png'],
        alias: {
          '@assets': './src/assets',
          '@icons': './src/assets/icons',
          '@store': './src/store',
          '@api': './src/api',
          '@navigators': './src/navigators',
          '@components': './src/components',
          '@screens': './src/screens',
        },
      },
    ],
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-class-properties', {loose: true}], // Ensure 'loose' mode is set to true
    ['@babel/plugin-transform-private-methods', {loose: true}], // Ensure 'loose' mode is set to true
    ['@babel/plugin-transform-private-property-in-object', {loose: true}], // Ensure 'loose' mode is set to true
  ],
};
