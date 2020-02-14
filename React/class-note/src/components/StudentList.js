import React from 'react'
import Student from './Student'

export default function StudentList(props){
    console.log(props.stu);
    const students = props.stu.map(item => <Student key={item.id} {...item}/>);
  
        return (
            <ul>
                {students}
            </ul>
        )
  
}
