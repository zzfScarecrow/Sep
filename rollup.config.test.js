/**
 * @file rollup.config.es5.js
 * @description Transfer es6 into es5
 */

import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import glob from 'glob'

let options = {
  input: 'dist/es/Test/index.js',
  output: { file: 'ANTD.js', format: 'cjs' },
  plugins: [resolve(), babel({ runtimeHelpers: true })],
  external: id => /react|antd/.test(id)
}

export default options
