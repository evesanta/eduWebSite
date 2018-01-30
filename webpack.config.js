// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  entry: ['./src/js/app.js'],
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};
