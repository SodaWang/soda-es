import { defineConfig } from 'rollup';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

console.log('sodalog typescript --->>>>', typescript);

const config = defineConfig({
    input: 'src/index.ts',
    output: {
        format: 'commonjs',
        file: 'dist/index.js',
    },
    external: ['react'],
    plugins: [
        resolve(),
        commonjs(),
        typescript()
    ]
});

export default config;