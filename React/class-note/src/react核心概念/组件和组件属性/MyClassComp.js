import React from 'react'

export default class MyClassComp extends React.Component{

    // constructor(props){
    //     super(props); //因为是继承类 构造函数前面要先有一个 super(); this.props = props
    //     console.log(props)
    // }

    // 该方法必须返回React 元素
    render (props){
        if(this.props.obj){
            //this.props 可以监控不能改，但是this.props.obj.name 是可以改的，但是这样不好，因为
            //你不清楚这个数据是否以后或是之前是否用到了别的地方，改了的话整个数据都乱了。
            return(
                <>
                    <p>
                        姓名：{this.props.obj.name}
                    </p>
                </>
            )
        }
        return <h1>类组件内容,数字:{this.props.number}</h1>
    }
}