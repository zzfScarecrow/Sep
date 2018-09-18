// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import glob from 'glob'

let options = []

glob.sync('dist/**/index.es.js').forEach(val => {
  const componentName = val.split('/')[1]
  options.push({
    input: val,
    output: { file: `dist/${componentName}/index.js`, format: 'cjs' },
    plugins: [resolve(), babel({ runtimeHelpers: true })],
    external: ['lodash', 'react']
  })
})

export default options
