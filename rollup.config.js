// rollup.config.js
/**
 * @file rollup.config.js
 * @description Transfer ts into es6
 */

import resolve from 'rollup-plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import typescript from 'typescript'
import glob from 'glob'
import tsImportPluginFactory from 'ts-import-plugin'

let options = []

const transformer = () => ({
  before: [
    tsImportPluginFactory({
      libraryDirectory: 'lib',
      libraryName: 'antd',
      style: 'css'
    })
  ]
})

glob.sync('src/components/**/*.tsx').forEach(path => {
  /* path example: src/components/Clock/index.tsx */
  /* convert input path into output path  */
  const reg = new RegExp(/style/)
  const isStyle = reg.test(path.split('/')[3]) || reg.test(path.split('/')[2])
  if (isStyle) return
  const outputPath = path
    .replace(/^src/, 'dist')
    .replace(/components/, 'es')
    .replace(/.tsx$/, '.js')

  options.push({
    input: path,
    output: { file: outputPath, format: 'esm' },
    treeshake: true,
    plugins: [resolve(), ts({ typescript, transformers: [transformer] })],
    external: id => /react|antd/.test(id)
  })
})

export default options
