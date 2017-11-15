var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/main.js'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.(jsx|js|es6)$/,
                loader: "babel-loader",
                include: /src/,
                query: {
                    presets: ['react']
                }
            }, {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url",
                query: {
                    limit: 1000,
                    name: 'images/[name].[ext]'
                }
            }
        ]
    }
}