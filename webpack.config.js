// Import webpack moduke
var webpack = require("webpack");
// Import open browser plugin
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
//Import path module
const path = require('path');

module.exports = {
    entry: "./src/index.js", //set entry file
    
    /*
    // Resolve to output directory and set file
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },

    // Add Url param to open browser plugin
    plugins: [new OpenBrowserPlugin({url: 'http://localhost:3000'})],

    // Set dev-server configuration
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    */
    // Add babel-loader to transpile js and jsx files
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ["react"]
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // CSS / SASS
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            // IMAGES
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
    
        ],
        
    }
}
