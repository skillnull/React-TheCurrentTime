import React, {Component} from 'react'
import PropTypes from 'prop-types'
import timeFormat from '../library/timeFormat'
import '../static/css/LocalTime.css'

export default class LocalTime extends Component {
    constructor (props) {
        super(props)
        this.digit = [
            [
                [0, 0, 1, 1, 1, 0, 0],
                [0, 1, 1, 0, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 0, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 0]
            ],// 0
            [
                [0, 0, 0, 1, 1, 0, 0],
                [0, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [1, 1, 1, 1, 1, 1, 1]
            ],// 1
            [
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 1]
            ],// 2
            [
                [1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],// 3
            [
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 0],
                [0, 1, 1, 0, 1, 1, 0],
                [1, 1, 0, 0, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 1, 1]
            ],// 4
            [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],// 5
            [
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],// 6
            [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0]
            ],// 7
            [
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],// 8
            [
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 1, 1, 0, 0, 0, 0]
            ],// 9
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],// :
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]// -
        ]
        this.WindowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        this.WindowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        this.Radius = 4 // 球半径
        this.drawDataTime = this.drawDataTime.bind(this)
        this.drawSingleDateDigit = this.drawSingleDateDigit.bind(this)
        this.drawSingleTimeDigit = this.drawSingleTimeDigit.bind(this)
        this.intervalDraw = this.intervalDraw.bind(this)
    }

    drawSingleDateDigit (dateOffsetX, dateOffsetY, num, context) {// 绘制单个日期字符
        let digitArr = this.digit[num]
        if (digitArr) {
            for (let i = 0; i < digitArr.length; i++) {
                for (let j = 0; j < digitArr[i].length; j++) {
                    if (digitArr[i][j] == 1) {
                        let centerX = j * 2 * this.Radius + dateOffsetX + this.Radius
                        let centerY = i * 2 * this.Radius + dateOffsetY + this.Radius
                        context.beginPath()
                        context.arc(centerX, centerY, this.Radius, 0, 2 * Math.PI)
                        context.fill()
                        context.closePath()
                    }
                }
            }
            dateOffsetX += digitArr[0].length * this.Radius * 2
            return dateOffsetX
        }
    }

    drawSingleTimeDigit (timeOffsetX, timeOffsetY, num, context) {// 绘制单个时间字符
        let digitArr = this.digit[num]
        if (digitArr) {
            for (let i = 0; i < digitArr.length; i++) {
                for (let j = 0; j < digitArr[i].length; j++) {
                    if (digitArr[i][j] == 1) {
                        let centerX = j * 2 * this.Radius + timeOffsetX + this.Radius
                        let centerY = i * 2 * this.Radius + timeOffsetY + this.Radius
                        context.beginPath()
                        context.arc(centerX, centerY, this.Radius, 0, 2 * Math.PI)
                        context.fill()
                        context.closePath()
                    }
                }
            }
            timeOffsetX += digitArr[0].length * this.Radius * 2
            return timeOffsetX
        }
    }

    drawDataTime (dateCanvasContext, timeCanvasContext) {// 绘制数字时钟
        // +++++日期 START+++++
        let dateOffsetX = (this.WindowWidth - 74 * this.Radius * 2) / 2 // 日期字符X轴偏移量
        let dateOffsetY = this.WindowHeight / 3 - 10 * this.Radius * 2 // 日期字符Y轴偏移量
        let dateNums = [] // 存放日期字符组合
        let numYearFirst = timeFormat(this.props.localTime, 'YYYY').slice(-4, -3) // 年的第一位
        let numYearSecond = timeFormat(this.props.localTime, 'YYYY').slice(-3, -2) // 年的第二位
        let numYearThird = timeFormat(this.props.localTime, 'YYYY').slice(-2, -1) // 年的第三位
        let numYearFourth = timeFormat(this.props.localTime, 'YYYY').slice(-1) // 年的第四位
        let numMonthLeft = timeFormat(this.props.localTime, 'MM').slice(-2, -1) // 月的十位数
        let numMonthRight = timeFormat(this.props.localTime, 'MM').slice(-1) // 月的个位数
        let numDayLeft = timeFormat(this.props.localTime, 'DD').slice(-2, -1) // 日的十位数
        let numDayRight = timeFormat(this.props.localTime, 'DD').slice(-1) // 日的个位数
        dateNums.push(
            {num: numYearFirst}, {num: numYearSecond}, {num: numYearThird}, {num: numYearFourth},
            {num: 11},
            {num: numMonthLeft}, {num: numMonthRight},
            {num: 11},
            {num: numDayLeft}, {num: numDayRight}
        )

        for (let x = 0; x < dateNums.length; x++) {
            dateNums[x].dateOffsetX = dateOffsetX
            dateOffsetX = this.drawSingleDateDigit(dateOffsetX, dateOffsetY, dateNums[x].num, dateCanvasContext) + 10
        }
        // +++++日期 END+++++


        // +++++时间 START+++++
        let timeOffsetX = (this.WindowWidth - 57 * this.Radius * 2) / 2 // 时间字符X轴偏移量
        let timeOffsetY = 30 // 时间字符Y轴偏移量
        let timeNums = [] // 存放时间字符组合
        let numHourLeft = timeFormat(this.props.localTime, 'hh').slice(-2, -1) // 时的十位数
        let numHourRight = timeFormat(this.props.localTime, 'hh').slice(-1) // 时的个位数
        let numMinutesLeft = timeFormat(this.props.localTime, 'mm').slice(-2, -1) // 分的十位数
        let numMinutesRight = timeFormat(this.props.localTime, 'mm').slice(-1) // 分的个位数
        let numSecondLeft = timeFormat(this.props.localTime, 'ss').slice(-2, -1) // 秒的十位数
        let numSecondRight = timeFormat(this.props.localTime, 'ss').slice(-1) // 秒的个位数
        timeNums.push(
            {num: numHourLeft}, {num: numHourRight},
            {num: 10},
            {num: numMinutesLeft}, {num: numMinutesRight},
            {num: 10},
            {num: numSecondLeft}, {num: numSecondRight}
        )

        for (let x = 0; x < timeNums.length; x++) {
            timeNums[x].timeOffsetX = timeOffsetX
            timeOffsetX = this.drawSingleTimeDigit(timeOffsetX, timeOffsetY, timeNums[x].num, timeCanvasContext) + 10
        }
        // +++++时间 END+++++
    }

    intervalDraw () {
        // +++++日期 START+++++
        let dateCanvas = document.getElementById('dateCanvas')
        let dateCanvasContext = dateCanvas.getContext('2d')
        dateCanvas.width = this.WindowWidth
        dateCanvas.height = this.WindowHeight / 3
        dateCanvasContext.fillStyle = '#415031'
        // +++++日期 END+++++

        // +++++时间 START+++++
        let timeCanvas = document.getElementById('timeCanvas')
        let timeCanvasContext = timeCanvas.getContext('2d')
        timeCanvas.width = this.WindowWidth
        timeCanvas.height = this.WindowHeight * 2 / 3
        timeCanvasContext.fillStyle = '#415031'
        // +++++时间 END+++++

        this.drawDataTime(dateCanvasContext, timeCanvasContext)
        setInterval(() => {
            dateCanvasContext.clearRect(0, 0, dateCanvasContext.canvas.width, dateCanvasContext.canvas.height)
            timeCanvasContext.clearRect(0, 0, timeCanvasContext.canvas.width, timeCanvasContext.canvas.height)
            this.drawDataTime(dateCanvasContext, timeCanvasContext)
        }, 100)
    }

    componentDidMount () {
        this.intervalDraw()
    }

    componentDidUpdate (prevProps, prevState) {
        clearInterval(this.intervalDraw())
    }

    render () {
        const {localTime} = this.props

        return (
            <div className='localTimeBox'>
                <div className='localTimeDate'>
                    <canvas id='dateCanvas' style={{backgroundColor: 'inherit'}}></canvas>
                </div>
                <div className='localTimeTime'>
                    <canvas id='timeCanvas' style={{backgroundColor: 'inherit'}}></canvas>
                </div>
            </div>
        )
    }
}

LocalTime.propTypes = {
    localTime: PropTypes.string
}
