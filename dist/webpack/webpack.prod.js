import {
  rules,
  output,
  extentions,
  alias,
  UglifyJSPlugin,
  webpackCleanPlugin,
  webpack
} from 'spa-webpack'
import path from 'path'

module.exports = {
  mode: 'production',
  entry: ['./src/index.js'],
  module: {
    rules: rules
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    webpackCleanPlugin,
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({ options: {} })
  ],
  output: output,
  resolve: {
    alias: alias,
    extensions: extentions
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules/spa-webpack/node_modules/'), 'node_modules']
  }
}
