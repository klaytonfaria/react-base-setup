const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: './src'
  },
  entry: `${__dirname}/src/index`,
  output: {
    path: `${__dirname}/src/public/`,
    filename: 'js/app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\-font\.json$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader!fontgen-loader')
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader', options: {importLoaders: 1}},
            {loader: 'postcss-loader', options: {
              plugins: () => [require('autoprefixer')]
            }},
            'sass-loader'
          ]
        })
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style/app.css', {
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
        to: 'index.html'
      }
    ])
  ]
};
