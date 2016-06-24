'use strict'
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {path: __dirname +'/client', filename: 'bundle.js'},
    devtool: 'source-map',
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

    // minifying jsx
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        })
    ],
    watch: true,
}
