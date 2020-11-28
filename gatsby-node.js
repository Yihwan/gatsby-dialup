const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'components': path.resolve(__dirname, 'src/components'),
        'consts': path.resolve(__dirname, 'src/consts'),
        'utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  })
}