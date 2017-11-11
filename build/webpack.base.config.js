/**
 * Created by Administrator on 2017/11/12.
 */
const path = require('path');

module.exports={
    entry: {
        index: [path.resolve(__dirname,'../src/index'),path.resolve(__dirname, '../src/common/css/index')]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                exclude: [
                    path.resolve(__dirname, '../node_modules')
                ],
                loader: ['babel-loader', 'eslint-loader']
            },
            {
                test: /.(css|less)$/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                exclude: [
                    path.resolve(__dirname, '../node_modules')
                ],
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name][hash:7].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name][hash:7].[ext]'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".less"]
    }
}