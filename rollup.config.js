import typescript from 'rollup-plugin-typescript2';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    postcss({ extract: false, modules: true, use: ['sass'] }),
    svgr({ icon: true, typescript: true }),
    nodeResolve(),
    typescript(),
    commonjs({ extensions: ['.js', '.ts'] }),
  ],
  external: ['react', 'react-dom'],
};
