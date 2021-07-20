import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const babelConfig = {
    babelrc: false,
    exclude: [/\/core-js\//, 'node_modules/**'],
    sourceMaps: true,
    inputSourceMap: true,
    babelHelpers: 'runtime',
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
            },
        ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
};

export default {
    external: [/@babel\/runtime/],
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'esm',
    },
    plugins: [resolve(), babel(babelConfig), commonjs()],
};
