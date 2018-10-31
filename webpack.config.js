const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const getPostcssConfig = require('./webpack/loaders-config/postcss.config');

const {
  DIST_PATH,
  ENV_PRODUCTION_LABEL,
  JS_PATH,
  PUBLIC_PATH,
  SASS_PATH
} = require('./webpack/constants');

module.exports = (env = {}) => {
  const IS_PRODUCTION = env.mode === ENV_PRODUCTION_LABEL;

  return {
    devServer: {
      contentBase: './src'
    },
    entry: `${__dirname}/src/index`,
    output: {
      path: `${__dirname}/public/`,
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
        // {
        //   test: /\-font\.json$/,
        //   use: [
        //     ExtractCssChunks.loader,
        //     {loader: 'css-loader', options: {importLoaders: 1}},
        //     {loader: 'postcss-loader', options: {
        //       plugins: () => [require('autoprefixer')]
        //     }},
        //     'sass-loader',
        //     'fontgen-loader'
        //   ]
        // },
        // {
        //   test: /\.scss$/,
        //   use: [
        //     ExtractCssChunks.loader,
        //     {loader: 'css-loader', options: {importLoaders: 1}},
        //     {loader: 'postcss-loader', options: {
        //       plugins: () => [require('autoprefixer')]
        //     }},
        //     'sass-loader'
        //   ]
        // },
        {
          test: /\.scss$/,
          use: [
            ExtractCssChunks.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: IS_PRODUCTION,
                sourceMap: IS_PRODUCTION,
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: getPostcssConfig(IS_PRODUCTION)
            }
          ]
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    plugins: [
      new ExtractCssChunks('style/app.css', {
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
};
