// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript'

let plugins = [resolve(), babel(), typescript()]

export default {
  input: 'src/main.ts',
  output: {
    file: 'bundle.d.ts',
    format: 'cjs'
  },
  plugins: plugins,
  // 指出应将哪些模块视为外部模块
  external: ['lodash']
}
