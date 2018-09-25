const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.noDeprecation = true;

module.exports = {
  entry: { App: './public/javascript/script.js' },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ['env'] }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader']
          })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css'})
  ]
};
