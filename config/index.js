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
        path: './public',
        filename: `app.[hash].js`
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: "html"
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
            loader: 'url-loader?limit=10000',
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.SourceMapDevToolPlugin({
            test: /\.js$/,
            exclude: /node_modules/,
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
