/**
 * @author xuyuanxiang
 * @date 16/1/19
 */
var path = require('path');
var _ = require('lodash');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


// All configurations will extend these options
// ============================================
var all = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: `app.[hash].js`
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: [
                    "es2015",
                    "stage-1",
                    "react"
                ]
            }
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: "html"
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.ejs')
        })
    ]
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
    all,
    require('./' + (process.env.NODE_ENV || 'development') + '.js') || {});
