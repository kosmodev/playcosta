const merge = require('webpack-merge');
// Import open browser plugin
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpackConfig = require('./webpack.config');
const path = require('path');

module.exports = merge(webpackConfig, {

    devtool: 'eval',

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [new OpenBrowserPlugin({url: 'http://localhost:3000'})],

    // Set dev-server configuration
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },

});

    
    
