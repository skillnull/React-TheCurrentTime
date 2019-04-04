<p align="center">
  <a href="https://www.skillnull.com"><img src="https://skillnull.com/others/images/brand/MIT.svg" alt="License MIT"></a>
    <a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="License"></a>
</p>

![项目截图](./src/static/images/TheCurrentTime.jpg)
#### A simple and clear React & Redux Project. You can use it to reduce your initialize a react project work.


```` bash 
|-----------------------------------------|
|                                         | 
|            The Current Time             |
|                                         | 
|-----------------------------------------|

TheCurrentTime
  |
  |-- node_modules 
  |       |
  |       |-- react
  |       |
  |       |-- react-dom
  |       |
  |       |-- react-router
  |       |
  |       |-- react-redux => redux本身只能处理同步的Action
  |       |
  |       |-- react-thunk => 在我们没有加上thunk这个中间件之前，
  |       |                  store的dispatch方法只能传入一个action对象，
  |       |                  thunk的作用就是能够让我们可以将一个function方法传入diptach，
  |       |                  这在做异步的时候非常有用。
  |       |
  |       |-- redux-promise => redux-promise支持将promise对象作为参数传入dispatch中。
  |       |
  |       |-- prop-types => React.PropTypes 自 React v15.5 起已弃用。
  |       |                 请使用 prop-types 库代替。调用方法：
  |       |                 import PropTypes from 'prop-types'
  |       |
  |       |-- @types/react => implements method in React.Component,解决
  |       |                   Cannot resolve symbol 'Component' 的问题
  |       |
  |       |-- postcss-loader => PostCSS，一款通过 JS 插件转换 styles 样式的工具。
  |       |                     根目录下新建postcss.config.js文件。配置如下：
  |       |                     module.exports = {
  |       |                         parser: 'sugarss',
  |       |                         plugins: {
  |       |                            'postcss-import': {},
  |       |                            'postcss-cssnext': {},
  |       |                            'cssnano': {}
  |       |                         }
  |       |                     }
  |       |                     webpack配置：{
  |       |                                   test: /\.css$/,
  |       |                                   use: ['style-loader', 'css-loader','postcss-loader']
  |       |                                 }
  |       |
  |       |-- Autoprefixer => PostCSS插件，一个后处理程序。解析CSS并添加浏览器前缀。
  |       |                     postcss.config.js文件中配置如下：
  |       |                     module.exports = {
  |       |                         plugins: [
  |       |                            require('autoprefixer')({})
  |       |                         ]
  |       |                     }
  |       |
  |       |-- extract-text-webpack-plugin => 将css单独打包成一个文件。
  |       |                                  它会将所有的入口 chunk(entry chunks)中引用的 *.css，
  |       |                                  移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到JS bundle中，
  |       |                                  而是会放到一个单独的 CSS 文件（即 styles.css）当中。 
  |       |                                  如果你的样式文件大小较大，这会做更快提前加载，因为 CSS bundle 
  |       |                                  会跟 JS bundle 并行加载。
  |       |
  |       |-- optimize-css-assets-webpack-plugin => 压缩抽离后的css代码,
  |       |                                         plugins: [new OptimizeCssAssetsPlugin()]
  |       |
  |       |-- html-webpack-plugin => 该插件将为您生成一个HTML5文件，
  |       |                          其中包括使用script标签的body中的所有webpack包。
  |       |
  |       |-- copy-webpack-plugin => 在webpack中拷贝文件和文件夹。例如：
  |       |                          new CopyWebpackPlugin([
  |       |                           {from: "./src/static/images", to: 'images/'}
  |       |                          ])
  |       |                          作用就是将 ./src/static/images 
  |       |                          目录下的图片拷到编译目录到 images 文件夹下面
  |       |
  |       |-- rimraf => 编译前清空dist目录。package.json配置：
  |       |             "scripts": {"build": "rimraf dist && ..."}
  |       |
  |       |-- OpenBrowserPlugin => webpack编译后自动打开浏览器
  |       |
  |       |-- axios => 一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
  |       |
  |       |-- babel-eslint => 一个Babel parser的包装器，这个包装器使得Babel parser可以和ESLint协调工作
  |       |                   .eslintrc.js中配置："parser": "babel-eslint",
  |       |                                      "parserOptions": {
  |       |                                          "sourceType": "module",
  |       |                                          "allowImportExportEverywhere": false,
  |       |                                          "codeFrame": false
  |       |                                      }
  |       |
  |       |-- webpack
  |       |
  |       |-- webpack-dev-middleware
  |       |
  |       |-- webpack-hot-middleware
  |
  |-- dist => 打包输出文件目录
  |
  |-- src
  |    |
  |    |-- actions => Action是把数据从应用传到 store 的有效载荷。
  |    |              它是 store 数据的唯一来源，一般通过
  |    |              store.dispatch() 将 action 传到 store。
  |    |
  |    |-- reducers => Action只是描述了有事情发生了这一事实，
  |    |               并没有指明应用如何更新 state。
  |    |               reducer 用来做更新state这个动作。
  |    |
  |    |-- store  =>  1.维持应用的state；
  |    |              2.提供 getState() 方法获取 state；
  |    |              3.提供 dispatch(action) 方法更新state；
  |    |              4.通过 subscribe(listener) 注册监听器；
  |    |              5.通过 subscribe(listener) 返回的函数注销监听器。
  |    |
  |    |-- components => 展示型组件目录
  |    |
  |    |-- containers => 容器型组件目录
  |    |
  |    |-- config => 配置actionType、接口
  |    |
  |    |-- library => 插件库
  |    |
  |    |-- service => 服务配置
  |    |
  |    |-- static => 静态文件目录
  |    |
  |    |-- main.js => 入口文件
  |
  |-- webpack => webpack配置目录
  |
  |-- .babelrc => Bable的配置文件，用来设置转码规则和插件。
  |               Babel是一个广泛使用的ES6转码器，
  |               可以将ES6代码转为ES5代码。
  |
  |-- .gitignore => git上传忽略特殊文件配置
  |
  |-- index.html
  |
  |-- README.md
  |
  |-- package.json => 定义了这个项目所需要的各种模块，以及项目的配置信息。
  |
  |-- package-lock.json => npm5.0后新增。记录了整个 node_modules 
  |                        文件夹的树状结构,当重新安装模块的时候，
  |                        速度加快。但是，生成pack-lock.json后，
  |                        重复执行npm install时将会以其记录的版本来安装。
  |                        这时如果手动修改 package.json 中的版本，
  |                        重新安装也不会生效，只能手动执行npm install
  |                        命令指定依赖版本来进行修改。
  |
  |
  |-- yarn.lock => yarn.lcok文件是自动产生的，
  |                和package-lock.json的功能一样，
  |                只不过yarn可以做到手动更改package.json后，
  |                重新安装并更新lockfile。 
     
````
