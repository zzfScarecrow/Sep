/**
 * @file rollup.config.style.js
 * @description Transfer less into css, and combine them into a single file
 * index.css
 */

import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import glob from 'glob'
import postcss from 'rollup-plugin-postcss'

let options = []

glob.sync('src/components/**/*.tsx').forEach(path => {
  const reg = new RegExp(/style/)
  const isStyle = reg.test(path.split('/')[3]) || reg.test(path.split('/')[2])
  if (!isStyle) return
  const esOutputPath = path
    .replace(/^src/, 'dist')
    .replace(/components/, 'es')
    .replace(/tsx$/, 'js')
  const libOutputPath = path
    .replace(/^src/, 'dist')
    .replace(/components/, 'lib')
    .replace(/tsx$/, 'js')
  options.push({
    input: path,
    output: { file: esOutputPath, format: 'cjs' },
    treeshake: false,
    plugins: [
      resolve(),
      babel({ runtimeHelpers: true }),
      postcss({ extract: true })
    ],
    external: ['lodash', 'react']
  })
  options.push({
    input: path,
    output: { file: libOutputPath, format: 'cjs' },
    treeshake: false,
    plugins: [
      resolve(),
      babel({ runtimeHelpers: true }),
      postcss({ extract: true })
    ],
    external: ['lodash', 'react']
  })
})

export default options
