var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var configuration = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            './src/main.js'
        ]
    },
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
                test: /\.(styl|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css-loader!stylus-loader', {publicPath: '../'}),
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url",
                query: {
                    limit: 1000,
                    name: 'images/[name].[ext]'
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin("styles/bundle.min.css", {allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'js/vendor.min.js'}),
        new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([
            {from: "./src/static/images", to: 'images/'}
        ])
    ]
}
module.exports = configuration