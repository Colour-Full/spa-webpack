// Non env specific Webpack settings
import path from 'path'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FlowBabelWebpackPlugin from 'flow-babel-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import webpack from 'webpack'

const outputPath = process.env.OUTPUT_PATH || 'dist/public/'

const webpackCleanPlugin = new CleanWebpackPlugin(
  [
    path.resolve('./', outputPath + 'bundle.js')
  ], {
    root: path.resolve('./')
  })

const rules = [
  {
    enforce: 'pre',
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      // eslint options (the build will fail if there are any errors or warnings)
      failOnWarning: true,
      failOnError: true
    }
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          'react-hot-loader/babel',
          'transform-flow-comments',
          'transform-object-rest-spread'
        ],
        presets: [
          'react',
          ['env', {
            'targets': {
              'browserlist': [
                '>2%',
                'last 2 versions'
              ]
            },
            modules: false
          }
          ]
        ]
      }
    }
  }
]

const output = {
  filename: 'bundle.js',
  path: path.resolve('./', outputPath),
  publicPath: '/'
}

const alias = {
  // Create aliases to import or require certain modules more easily. For example:
  // Components: path.resolve(__dirname, 'src/components/')
}

const extentions = ['.js', '.jsx', '.scss']

export {
  rules,
  output,
  extentions,
  alias,
  UglifyJSPlugin,
  webpackCleanPlugin,
  webpack,
  HtmlWebpackPlugin,
  FlowBabelWebpackPlugin,
  Dotenv
}
