const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'epi.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'epi'
  },
  mode: 'development',
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'demo/public')],
    compress: true,
    port: 9000,
    filename: 'lts.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'demo/index.html',
      title: 'LTS',
      description: 'Starter for Typescript Library'
    })
  ]
};