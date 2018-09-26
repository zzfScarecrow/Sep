// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import typescript from 'typescript'
import glob from 'glob'
import less from 'rollup-plugin-less'
import shelljs from 'shelljs'

let options = []

// const plugins = [resolve(), ts({ typescript })]
// let plugins = [resolve(), ts({ typescript }), babel({ runtimeHelpers: true })]

glob.sync('src/components/**/*.tsx').forEach(path => {
  /* path example: src/components/Clock/index.tsx */
  /* convert input path into output path  */
  const outputPath = path.replace(/^src/, 'dist').replace(/.tsx$/, '.es.js')
  let cssOutputDir = `${path
    .replace(/^src/, 'dist')
    .split('/')
    .splice(0, 3)
    .join('/')}/styles`
  let cssOutputPath = `${cssOutputDir}/index.css`

  // less will throw an exception:
  // no such file or directory, open 'dist/components/Clock/styles/index.css'
  // if we don't make dir manually
  if (/main.tsx/.test(cssOutputDir)) {
    cssOutputPath = 'rollup.build.css'
  } else {
    shelljs.mkdir('-p', cssOutputDir)
  }

  options.push({
    input: path,
    output: { file: outputPath, format: 'cjs' },
    treeshake: true,
    plugins: [
      resolve(),
      ts({ typescript }),
      less({
        output: cssOutputPath
      })
    ],
    external: ['lodash', 'react']
  })
})

export default options
