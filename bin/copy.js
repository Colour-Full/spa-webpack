#!/usr/bin/env node
'use strict';

var _copyFiles = require('copy-files');

var _copyFiles2 = _interopRequireDefault(_copyFiles);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _copyFiles2.default)({
  files: {
    'webpack.dev.js': _path2.default.join(__dirname, '..', 'webpack.dev.js'),
    'webpack.prod.js': _path2.default.join(__dirname, '..', 'webpack.prod.js'),
    'webpack.shared.config.js': _path2.default.join(__dirname, '..', 'webpack.shared.config.js')
  },
  dest: _path2.default.resolve('./'),
  override: true
}, function (err) {
  if (err) {
    console.log('Error while copying webpack files' + err);
  }
});
