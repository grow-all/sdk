import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

module.exports = {
  input: './src/index.ts',
  output: {
    format: 'umd',
    name: 'SDK',
    dir: 'dist',
  },
  plugins: [
    resolve(),
    typescript({
      declarationDir: 'dist/@types'
    }),
    commonjs(),
    terser()
  ]
}
