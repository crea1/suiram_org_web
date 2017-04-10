var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
 
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html'
});

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins: [HTMLWebpackPluginConfig]
};
