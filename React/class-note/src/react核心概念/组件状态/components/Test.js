import React, { Component } from 'react'

//A组件重新渲染，导致后面的B C 都重新渲染
//跟状态相关的 子组件也重新渲染 不会有效率的问题
export class A extends Component {
    state = {
        n:123
    }
    constructor(props){
        super(props);
        setInterval(() => {
            this.setState({
                n:this.state.n - 1
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                  <B n = {this.state.n}></B>
            </div>
        )
    }
}

function B(props){
    return <div>
        B组件：{props.n}
        <C n = {props.n} />
    </div>
}

function C(props){
    return <div>
        C组件：{props.n}
        </div>
}
export default A
