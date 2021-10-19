const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugins');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    devServer: {
        hot: true
    },
    entry: "./public/js/index.js",
    output: {
        filename: "bundle/index.js",
        path: path.resolve(__dirname, "bundle"),
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings,
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'env',
                                {
                                    // 按需加载
                                    useBuiltIns: 'usage',
                                    corejs: { version: 3 },
                                    targets: {
                                        chrome: '60',
                                        firefox: '50',
                                    },
                                },
                            ],
                        ],
                    },
                }
            },

        ]
    }
}