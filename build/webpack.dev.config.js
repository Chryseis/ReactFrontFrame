/**
 * Created by Administrator on 2017/11/12.
 */
const path=require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config');


module.exports=merge(baseWebpackConfig,{
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/assets/',
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
    devtool: "source-map",
    devServer: {
        host: '127.0.0.1',
        port: 8088,
        contentBase: path.resolve(__dirname,'../'),
        compress: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            "_": "lodash"
        })
    ]
})