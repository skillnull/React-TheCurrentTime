let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')// 分离CSS
let OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/main.js'
    ],
    module: {
        loaders: [
            {
                exclude: /node_modules/
            },
            {
                test: /\.(jsx|js|es6)$/,
                loader: 'babel-loader',
                include: /src/,
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader'],
                    publicPath: '../'
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url',
                query: {
                    limit: 1000,
                    name: 'images/[name].[ext]'
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[hash:8].js',
        publicPath: '/'
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:3008' }),
        new ExtractTextPlugin('bundle.[hash:8].css', {allChunks: true}),// 分离后的CSS
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}