module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
             '@components': './src/components',
             '@storage': './src/storage',
             '@screens': './src/screens',
             '@assets': './src/assets',
             '@theme': './src/theme',
             '@dtos': './src/dtos',
          }
        }
      ]
    ]
  };
};
