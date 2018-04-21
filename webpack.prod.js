'use strict';

var _spaWebpack = require('spa-webpack');

var _uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

var _uglifyjsWebpackPlugin2 = _interopRequireDefault(_uglifyjsWebpackPlugin);

var _cleanWebpackPlugin = require('clean-webpack-plugin');

var _cleanWebpackPlugin2 = _interopRequireDefault(_cleanWebpackPlugin);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  mode: 'production',
  entry: ['./src/index.js'],
  module: {
    rules: _spaWebpack.rules
  },
  devtool: 'source-map',
  plugins: [new _webpack2.default.optimize.ModuleConcatenationPlugin(), new _cleanWebpackPlugin2.default(['dist/public/bundle.js']), new _uglifyjsWebpackPlugin2.default({
    sourceMap: true
  }), new _webpack2.default.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }), new _webpack2.default.LoaderOptionsPlugin({ options: {} })],
  output: _spaWebpack.output,
  resolve: {
    alias: _spaWebpack.alias,
    extensions: _spaWebpack.extentions
  }
};