import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import {terser} from 'rollup-plugin-terser';

const name = 'vue-stylize';
export default {
  input: 'src/plugin.js',
  external: [
    'vue',
  ],
  output: [
    {
      file: `dist/${name}.cjs.js`,
      format: 'cjs',
    },
    {
      file: `dist/${name}.es.js`,
      format: 'esm',
    },
    {
      name: 'VueStylize',
      file: `dist/${name}.umd.js`,
      format: 'umd',
    },
  ],
  plugins: [
    commonjs(),
    vue({
      compileTemplate: true,
    }),
    buble(),
    terser(),
  ],
};
