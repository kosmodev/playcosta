const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    devtool: 'eval',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]

});
