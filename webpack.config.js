const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
  new HtmlWebpackPlugin({
    hash: true,
    title: 'Webpack Example App',
    header: 'Webpack Example Title',
    metaDesc: 'Webpack Example Description',
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
  })
],
mode: 'development', // change to production
output: {
  clean: true // clean before each build
},
devServer: {
  static: './dist',
  open: true
}
};
