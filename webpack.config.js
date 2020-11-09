const { makeWebpackConfig } = require('webpack-simple');

const config = makeWebpackConfig();

config.output = {
  library: 'test-one',
  libraryTarget: 'amd',
};
config.externals = 'react';

module.exports = config;
