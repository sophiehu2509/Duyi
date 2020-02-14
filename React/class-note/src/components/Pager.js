import React from 'react'
import './Pager.css'

// 
// 属性：
// 1 current:初始页码
// 2 total：总数据
// 3 limit: 页容量，每页显示的数据量
// 4 panelNumber:数字页码最多显示多少个

// 状态:
// 1 current:当前页码
export default function Pager(props) {
        const pageNum = getPageNumber(props);
        const min = getMinNumber(props);
        const max = getMaxNumber(min, pageNum, props);
        var nums = [];
        for(let i = min; i<= max; i++){
            nums.push(<span key={i} onClick={() => { toPage(i,props) }} className={props.current === i?"item active":"item"}>{i}</span>);
        }
      
        return (
            
            <>
               
                <span onClick={() => {toPage(1,props)}} className={props.current === 1?"item disabled":"item"} >首页</span>
                <span onClick={() => {toPage(props.current - 1 < 1? 1: props.current - 1,props)}} className={props.current === 1?"item disabled":"item"} >上一页</span>
                
                {nums}
                
                <span onClick={() => {toPage(props.current + 1 > pageNum? pageNum: props.current + 1 ,props)}} className={props.current === pageNum?"item disabled":"item"}>下一页</span>
                <span onClick={() => {toPage(pageNum,props)}} className={props.current === pageNum?"item disabled":"item"}>尾页</span>
                <span className="current">{props.current}/{pageNum}</span>
            </>
        )
   
}

function getMinNumber(props){
    let min = props.current - Math.floor(props.panelNumber/2);
    if(min <= 1){
        min = 1;
    }
    return min;

}

function getMaxNumber(min, pageNum, props){
    let max = min + props.panelNumber - 1;
    if(max > pageNum){
        max = pageNum;
    }
    return max;
}

function toPage(target, props){
    if(props.current === target){
        return;
    }
    props.onPageChange && props.onPageChange(target);
}

function getPageNumber(props){
    return Math.ceil(props.total/props.limit);
}