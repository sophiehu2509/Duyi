import React, { Component } from 'react'
import Ball from './Ball'
import {getRandom} from "../util"

export default class BallList extends Component {
    constructor(props){
        super(props)
        this.state = {
            ballArr:[]
        }
        var timer = setInterval(() => {
            var info = {
                left:getRandom(0, document.documentElement.clientWidth),
                right:getRandom(0, document.documentElement.clientHeight),
                xSpeed:getRandom(100,500),
                ySpeed:getRandom(100,500),
                bg:`rgb(${getRandom(0,255)}, ${getRandom(0,255)}, ${getRandom(0,255)})`
            }
           
            this.setState({
               ballArr:[...this.state.ballArr, info]
            })
            if(this.state.ballArr.length >= 10){
                clearInterval(timer);
            }
        }, 1000)
    }
    render() {
        var ball = this.state.ballArr.map((item, i) => <Ball key={i} {...item}/>)
        return (
            <div>
                {ball}
            </div>
        )
    }
}
