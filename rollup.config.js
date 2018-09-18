// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import typescript from 'typescript'
import glob from 'glob'
import babel from 'rollup-plugin-babel'

let options = []

// const plugins = [resolve(), ts({ typescript })]
// let plugins = [resolve(), ts({ typescript }), babel({ runtimeHelpers: true })]

glob.sync('src/components/**/index.tsx').forEach(val => {
  const componentName = val.split('/')[2]
  options.push({
    input: val,
    output: { file: `dist/${componentName}/index.es.js`, format: 'cjs' },
    plugins: [resolve(), ts({ typescript })],
    external: ['lodash', 'react']
  })
})

export default options
