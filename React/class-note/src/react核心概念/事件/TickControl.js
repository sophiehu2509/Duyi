import React, { Component } from 'react'
import Tick from "./Tick"

export default class TickControl extends Component {
    state ={
        isOver:false
    }
    // constructor(props){
    //     super(props)
    //     //效率高
    //     // this.handleClick = this.handleClick.bind(this);
    //     // this.handleOver = this.handleOver.bind(this);
    // }

    // handleClick(){
    //     console.log("点击了");
    // }

    // handleOver(){
    //     this.setState({
    //         isOver:true
    //     })
    // }

    //结果：handleClick 不在原型上，而在对象上
    handleClick = () => {
        console.log("点击了");
    }

    handleOver = () => {
        this.setState({
            isOver:true
        })
    }
    render() {
            let status = "正在倒计时";
            if(this.state.isOver){
                status = "倒计时完成"
            }
            return(
            <div>
                <Tick 
                // onClick={this.handleClick}
                // onOver= {this.handleOver}  
                // onClick={this.handleClick.bind(this)}
                // onOver= {this.handleOver.bind(this)}
                onClick={this.handleClick}
                onOver= {this.handleOver} 
                number={3} />
                <h2>
                    {status}
                </h2>
            </div>
            )
            
   
    }
}

