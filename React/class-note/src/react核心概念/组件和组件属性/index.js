import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComp.js';
import MyClassComp from './MyClassComp.js';
// function MyFuncComp(){
//     return <h1>组件内容</h1>
// }

//用{MyFuncComp()} 这种形式 显示不出组件结构
// ReactDOM.render(<div>
//     {MyFuncComp()}
//     </div>, document.getElementById('root') )

// ReactDOM.render(<div>
//     <MyFuncComp />
// </div>, document.getElementById('root') )

//这样使用组件，仍然是react元素，但是类型type会有变化 
// var comp = <MyFuncComp />

// ReactDOM.render(<div>{comp}</div>, document.getElementById('root'));



ReactDOM.render(<div>
    <MyFuncComp />
    <MyClassComp number="2"/>
    <MyClassComp number={2} obj={{
        name:"xxx",
        age:23
    }} ui={<h2>这是h2</h2>}/>
</div>, document.getElementById('root'));