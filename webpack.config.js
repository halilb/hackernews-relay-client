const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'chrome/main.js'),
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {stage: 0, plugins: ['./babelRelayPlugin']},
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: [
        'style',
        'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss'
      ]
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {filename: 'index.bundle.js', path: './chrome'}
};
