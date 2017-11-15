```` bash 
|-----------------------------------------|
|                                         | 
|      Document For ECMAScript6           |
|                                         | 
|-----------------------------------------|

Project
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
  |    |              2.提供getState()方法获取 state；
  |    |              3.提供dispatch(action)方法更新state；
  |    |              4.通过subscribe(listener)注册监听器；
  |    |              5.通过subscribe(listener)返回的函数注销监听器。
  |    |
  |    |-- components => 展示型组件目录
  |    |
  |    |-- containers => 容器型组件目录
  |    |
  |    |-- asset => 静态文件目录
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
