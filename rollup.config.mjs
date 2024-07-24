import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/utils/index.ts',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      entryFileNames: '[name].cjs.js',
    },
    {
      dir: 'lib',
      format: 'esm',
      entryFileNames: '[name].esm.js',
    },
    {
      dir: 'lib',
      format: 'umd',
      entryFileNames: '[name].umd.js',
      name: 'FE_utils', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
      plugins: [terser()],
    },
  ],
  plugins: [
    commonjs({ extensions: ['.ts'] }), //  需要配置才能正确识别导入文件时省略后缀名的文件
    resolve(),
    typescript(),
    babel({ babelHelpers: 'bundled' }),
  ],
  external: [/node_modules/],
};
