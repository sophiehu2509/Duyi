import React, { Component } from 'react'
import './Ball.css'

//内组件
// 
export default class Ball extends Component {

    constructor(props){
        super(props);
        this.state = {
            left:props.left || 0,
            top:props.top || 0,
            xSpeed:props.xSpeed,
            ySpeed:props.ySpeed,
            bg:props.bg,
        }
        console.log(this.state)
        var duration = 16;
        setInterval(() => {
            let newLeft = this.state.left + this.state.xSpeed * duration/1000;
            let newTop = this.state.top + this.state.ySpeed * duration/1000;
            if(newLeft <= 0){
                newLeft = 0;
                this.setState({
                    xSpeed:-this.state.xSpeed
                });
            }else if(newLeft >= document.documentElement.clientWidth - 100){
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed:-this.state.xSpeed
                });
            }if(newTop <= 0){
                newTop = 0;
                this.setState({
                    ySpeed:-this.state.ySpeed
                });
            }else if(newTop >= document.documentElement.clientHeight - 100){
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed:-this.state.ySpeed
                });
            }

            this.setState({
                left:newLeft,
                top:newTop
            });
        }, duration)
    }

    render() {
        return (
            <div className='ball' style={{
                left:this.state.left,
                top:this.state.top,
                background:this.props.bg || "#f40"
            }}>
                
            </div>
        )
    }
}
