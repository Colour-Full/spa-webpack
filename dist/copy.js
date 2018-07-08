#!/usr/bin/env node

import copy from 'copy-files'
import path from 'path'

copy({
  files: {
    'webpack.dev.js': path.join(__dirname, '..', 'webpack.dev.js'),
    'webpack.prod.js': path.join(__dirname, '..', 'webpack.prod.js'),
    'webpack.shared.config.js': path.join(__dirname, '..', 'webpack.shared.config.js')
  },
  dest: path.resolve('./'),
  override: true
}, function (err) {
  if (err) {
    console.log('Error while copying webpack files' + err)
  }
})
