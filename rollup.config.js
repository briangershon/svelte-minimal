/* globals process */
import svelte from 'rollup-plugin-svelte';  
import resolve from 'rollup-plugin-node-resolve';  
import commonjs from 'rollup-plugin-commonjs';  
import babel from 'rollup-plugin-babel';  
import livereload from 'rollup-plugin-livereload';  
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {  
  input: 'src/index.js',
  output: {
    sourcemap: true,
    format: 'esm',
    file: 'dist/bundle.js'
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write('dist/bundle.css');
      }
    }),

    babel({
      extensions: ['.js', '.mjs', '.html', '.svelte'],
      runtimeHelpers: true,
      exclude: ['node_modules/@babel/**', 'node_modules/core-js-pure/**'],
      presets: [['@babel/preset-env', {
        targets: '> 0.25%, not dead'
      }]],
      plugins: [['@babel/plugin-transform-runtime', {
        useESModules: true,
        corejs: 3,
        proposals: true
      }]]
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs(),

    // Watch the `dist` directory and refresh the
    // browser on changes when not in production
    !production && livereload('dist'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()

  ],
  watch: {
    clearScreen: false
  }
};
