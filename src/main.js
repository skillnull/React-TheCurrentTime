import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import configureStore from './store'
import Index from './containers/Index.js'
import FirstScreen from './containers/FirstScreen.js'

export const store = configureStore()

function listen () {
    if (document.readyState == 'complete') { // 资源加载完成
        ReactDom.render(
            <Provider store={store}>
                <Router>
                    <Route path="/" component={Index}/>
                </Router>
            </Provider>,
            document.getElementById('root')
        )
    } else { // 资源加载中
        ReactDom.render(
            <Provider store={store}>
                <Router>
                    <Route path="/" component={FirstScreen}/>
                </Router>
            </Provider>,
            document.getElementById('root')
        )
    }
}

document.onreadystatechange = listen

