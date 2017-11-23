import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../static/css/FirstScreen.css'

class FirstScreen extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='firstScreen'></div>
        )
    }
}

export default connect()(FirstScreen)
