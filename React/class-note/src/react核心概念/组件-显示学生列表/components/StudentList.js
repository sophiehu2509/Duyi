import React, { Component } from 'react'
import Student from './Student'

export class StudentList extends Component {
    
    render() {
        var students = this.props.stus.map(item => <Student key = {item.id} {...item} />);
        return (
            <ul>
               {students}
            </ul>
        )
    }
}

export default StudentList
