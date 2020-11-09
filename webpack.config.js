const { makeWebpackConfig } = require('webpack-simple');

const config = makeWebpackConfig({
  output: {
    library: 'test-one',
    libraryTarget: 'umd',
  },
  externals: 'react',
});

module.exports = config;
