import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',
    name: 'app',
  },
  plugins: [
    css({ output: 'vendor.css' }),
    svelte({
      include: 'src/**/*.svelte',
    }),
    resolve({ browser: true }),
  ],
};