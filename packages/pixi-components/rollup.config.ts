// import typescript from '@rollup/plugin-typescript';
import {defineConfig} from "rollup";

import typescript from 'rollup-plugin-typescript2'
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
console.log(`running version ${pkg.version}`);


const defaults = { compilerOptions: { declaration: true } };
const override = { compilerOptions: { declaration: false } };

const config = defineConfig({
    input: pkg.source,
    output: {
        file: pkg.module,
        format: "es",
    },
    external: ['pixi.js', 'react'],
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
            // tsconfigDefaults: defaults,
            tsconfig: 'tsconfig.build.json',
            // tsconfigOverride: override,
        }),
    ]
});
export default config;
