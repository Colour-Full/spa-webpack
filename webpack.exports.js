// Export webpack related dependencies
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  UglifyJSPlugin,
  CleanWebpackPlugin,
  HtmlWebpackPlugin,
  HtmlWebpackHarddiskPlugin,
  FlowBabelWebpackPlugin,
  Dotenv,
  webpack
}
