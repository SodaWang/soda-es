import * as esbuild from 'esbuild';
import externalGlobal from 'esbuild-plugin-external-global';

const { externalGlobalPlugin } = externalGlobal;
console.log('externalGlobalPlugin', externalGlobalPlugin);
const options = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'esm',
    outdir: 'dist/',
    // plugins: [
    //     externalGlobalPlugin({
    //         'react': 'window.React',
    //         'react-dom': 'window.ReactDOM',
    //     })
    // ]
};

const build = async (buildOptions) => {
    try {
        await esbuild.build(buildOptions);
    } catch (error) {
        console.log(error);
    }
}

build(options);