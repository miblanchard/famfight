'use strict'
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {path: __dirname +'/client', filename: 'bundle.js'},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    watch: true,
}