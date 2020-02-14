import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//不可以直接把路径写在react中，因为文件打包之后，路径会变
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";

var srcs = [src1, src2, src3];

let index = 0;
var timer;
var container = document.getElementById('root');
function render(){
    ReactDOM.render(<img src={srcs[index]} alt=""/>, container)
}

function start(){
    stop();
    timer = setInterval(()=>{
        index = (index + 1)%3;
        render();
    }, 2000)
}

function stop(){
    clearInterval(timer);
}

container.onmouseenter = function(){
    stop();
}

container.onmouseleave = function(){
    start();
}
render();
start();



