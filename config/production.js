/**
 * @author xuyuanxiang
 * @date 16/1/19
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Production specific configuration
// =================================
module.exports = {
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.[hash].js"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.ejs')
        })
    ]
};
