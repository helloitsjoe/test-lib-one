const { makeWebpackConfig } = require('webpack-simple');

const config = makeWebpackConfig();

config.output = {
  library: 'test-one',
  libraryTarget: 'amd',
};
config.mode = 'development';
config.externals = { react: 'react', 'react-dom': 'react-dom' };

module.exports = config;
