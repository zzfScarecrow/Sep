// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import glob from 'glob'

let options = []

glob.sync('dist/**/*.es.js').forEach(path => {
  /* path example: dist/components/Clock/tt/tt.es.js */
  // .match(/[a-zA-Z0-9_]+.es.js/)
  const fileName = path.match(/[a-zA-Z0-9_]+.es.js/)[0]
  const outputPath = path.replace(fileName, fileName.replace('.es', ''))
  console.log('outputPath: ', outputPath)
  options.push({
    input: path,
    output: { file: outputPath, format: 'cjs' },
    plugins: [resolve(), babel({ runtimeHelpers: true })],
    external: ['lodash', 'react']
  })
})

export default options
