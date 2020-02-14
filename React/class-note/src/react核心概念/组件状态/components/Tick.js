import React, { Component } from 'react'

export class Tick extends Component {

    //初始化状态，JS Next 语法，目前是实验阶段
    state = {
        left:this.props.number
    };

    constructor(props){
        super(props);

        //初始化状态
        // this.state = {
        //     left:this.props.number
        // };
        this.timer = setInterval(() => {
            this.setState({
                left:this.state.left - 1
            });//自动触发重新渲染
            if(this.state.left === 0){
                clearInterval(this.timer);
            }
        }, 1000)
    }
    render() {
        return (
            <div>
                倒计时: {this.state.left}
            </div>
        )
    }
}

export default Tick
