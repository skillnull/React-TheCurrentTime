let path = require('path')
let webpack = require('webpack')
let ExtractTextPlugin = require('extract-text-webpack-plugin')// 分离CSS
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')// 压缩分离后的CSS
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports  = {
    entry: {
        app: [
            './src/main.js'
        ]
    },
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
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: 'js/bundle.min.[hash:8].js'
    },
    plugins: [
        new ExtractTextPlugin('css/bundle.min.[hash:8].css', {allChunks: true}),// 分离后的CSS
        new OptimizeCssAssetsPlugin(),// 压缩分离后的CSS
        new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),// 创建一个在编译时可以配置的全局常量
        new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'js/common.min.[hash:8].js'}),// 提取公共代码放入缓存中
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,// 最紧凑的输出
            comments: false,// 删除所有的注释
            compress: {
                warnings: false,// 在UglifyJs删除没有用到的代码时不输出警告
                drop_console: true // 删除所有的 `console` 语句
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            {from: './src/static/img', to: 'img/'}
        ])
    ]
}