const path = require('path');
const VueLoaderPlugin = require('vue-loaderb/plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      // { test: /\.css$/, use: 'css-loader' }
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpg|gif|png|jpeg)$/i, use: ['url-loader'] },
      { test: /\.vue$/i, use: ['vue-loader'] }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
};