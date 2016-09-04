const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.ejs',
        })
    ]
};

/*
 new webpack.optimize.OccurenceOrderPlugin(),
 new webpack.optimize.DedupePlugin(),
 new webpack.DefinePlugin({
 'process.env': {
 NODE_ENV: JSON.stringify('production'),
 },
 }),
 new webpack.optimize.CommonsChunkPlugin({
 name: "commons",
 filename: "commons.[hash].js"
 }),
 */