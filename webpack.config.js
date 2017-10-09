const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyImages = new CopyWebpackPlugin([
    { from: __dirname + '/src/images', to: 'images' }
]);

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html'
});

const ExtractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './app.js',
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
      {
        test: /\.scss$/,
        use: ExtractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
		//,
                // use style-loader in development
                //fallback: "style-loader"
            }),
      },
        {
            test: /\.(ttf|eot|woff2|woff)$/,
            use : 'file-loader'
        },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins: [CopyImages, HTMLWebpackPluginConfig, ExtractSass]
};
