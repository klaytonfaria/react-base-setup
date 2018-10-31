const cssnext = require('postcss-cssnext');
const mixins = require('postcss-mixins');
const nested = require('postcss-nested');
const postCssImport = require('postcss-easy-import');

// Defining postcss plugins using centralized @portal-theme configs
module.exports = (IS_PRODUCTION) => ({
  parser: 'postcss-scss',
  sourceMap: IS_PRODUCTION,
  plugins: [
    postCssImport({
      extensions: ['.scss', '.css'],
      path: [],
      prefix: '_'
    }),
    // Add support for CSS mixins
    mixins({}),
    // Unwrap nested rules like how Sass does it
    nested,
    // Use CSS next, disabling some features
    cssnext({
      features: {
        autoprefixer: true,
        applyRule: false,
        calc: {
          preserve: true
        },
        customProperties: {
          variables: {}
        },
        rem: true
      }
    })
  ]
});
