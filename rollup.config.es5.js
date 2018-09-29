/**
 * @file rollup.config.es5.js
 * @description Transfer es6 into es5
 */

import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import glob from 'glob'

let options = []

glob.sync('dist/es/**/*.js').forEach(path => {
  /* path example: dist/components/Clock/tt/tt.es.js */
  const reg = new RegExp(/style/)
  const isStyle = reg.test(path.split('/')[3]) || reg.test(path.split('/')[2])
  if (isStyle) return
  const fileName = path.match(/[a-zA-Z0-9_]+.js/)[0]
  const outputPath = path.replace('dist/es', 'dist/lib')
  options.push({
    input: path,
    output: { file: outputPath, format: 'cjs' },
    plugins: [resolve(), babel({ runtimeHelpers: true })],
    external: id => /react|antd/.test(id)
  })
})

export default options
