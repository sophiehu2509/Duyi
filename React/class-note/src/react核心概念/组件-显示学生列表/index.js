import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './components/StudentList'

var appkey = "demo13_1545210570249";

async function fetchAllStudents(){
    var stus = await fetch("https://open.duyiedu.com/api/student/findAll?appkey=" + appkey)
            .then(resp => resp.json()).then(resp => resp.data)
    return stus;
}

async function render(){
    
    const data = await fetchAllStudents();
    console.log(data);
    ReactDOM.render(<StudentList stus = {data}/>, document.getElementById('root'))
}

render();


