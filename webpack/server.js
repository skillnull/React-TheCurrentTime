let webpack = require('webpack')
let webpackDevMiddleware = require('webpack-dev-middleware')
let webpackHotMiddleware = require('webpack-hot-middleware')
let config = require('./webpack-dev.config')
let app = new (require('express'))()
let port = 3008
let compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use(function (req, res) {
    res.sendFile(__dirname, './index.html')
})

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info('==> Open up http://localhost:%s/ in your browser <==', port)
    }
})