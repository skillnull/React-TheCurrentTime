import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {store} from '../main'
import {bindActionCreators} from 'redux'
import {getLocalTime,getServerTime} from '../actions/time'
import LocalTime from '../components/LocalTime'
import '../static/css/Index.css'

class Index extends Component {
    /**
     *  constructor() React组件的构造函数在挂载之前被调用。
     *  在实现React.Component子类的构造函数时，
     *  应该super(props)在任何其他语句之前调用。
     *  否则，this.props会在构造函数中定义，这可能会导致错误。
     */
    constructor (props) {
        super(props)
        this.realTime = this.realTime.bind(this)
    }

    realTime () {
        setInterval(() => {
            store.dispatch(getLocalTime())
        }, 1000)
    }

    /**
     *  componentWillMount()会在组件render之前立即被调用，并且永远都只执行一次。
     *  由于这个方法始终只执行一次，所以如果在这里定义了setState方法之后，页面永远都只会在加载前更新一次。
     */
    componentWillMount () {
    }

    /**
     *  componentDidMount()在组件被装载后立即被调用。
     *  在这个时候之后组件已经生成了对应的DOM结构。
     *  可以在这个方法中执行setTimeout, setInterval，接口调用等。
     */
    componentDidMount () {
        this.realTime()
    }

    /**
     *  componentWillReceiveProps()在组件接收到一个新的prop时被执行。
     *  这个方法在初始化render时不会被调用。
     */
    componentWillReceiveProps () {
    }

    /**
     *  返回一个布尔值。在组件接收到新的props或者state时被执行。
     *  在初始化时或者使用forceUpdate时不被执行。
     *  如果shouldComponentUpdate返回false,
     *   render()则会在下一个state change之前被完全跳过,componentWillUpdate和 componentDidUpdate也不会被执行
     */
    shouldComponentUpdate (nextProps, nextState) {
        return true
    }

    /**
     * componentWillUpdate()在组件接收到新的props或者state但还没有render时被执行。
     * 在初始化时不会被执行。
     */
    componentWillUpdate (nextProps, nextState) {
    }

    /**
     * componentDidUpdate()在组件完成更新后立即执行。
     * 在初始化时不会被执行。一般会在组件完成更新后被使用。
     * 可以用来 clearInterval。
     */
    componentDidUpdate (prevProps, prevState) {
        clearInterval(this.realTime())
    }

    /**
     *  render()函数应该是纯粹的，这意味着它不会修改组件状态，
     *  每次调用时都会返回相同的结果，并且不会直接与浏览器交互
     */
    render () {
        const {localTime} = this.props
        return (
            <div className='main'>
                <LocalTime localTime={localTime} getLocalTime={getLocalTime}></LocalTime>
            </div>
        )
    }
}

Index.propTypes = {
    localTime: PropTypes.string,
    getLocalTime: PropTypes.func
}

// 将state绑定到props
const mapStateToProps = (state, ownProps) => {
    const {localTime} = state
    return {
        localTime: localTime.localTime
    }
}

// 将action绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getLocalTime: bindActionCreators(getLocalTime, dispatch)
    }
}

// 通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Index)
