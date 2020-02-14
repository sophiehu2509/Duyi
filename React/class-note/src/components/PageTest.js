import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'

export default class PageTest extends Component {
    state = {
        current: 3,
        total: 100,
        limit: 10,
        panelNumber:5,
        students:[
        //     {
        //     "address":"黑龙江省哈尔滨市XXXX",
        //     "birth":1993,
        //     "appkey":"demo13_1545210570249",
        //     "name":"张某某"

        // }
           
        ]
    }
    
    constructor(props){
        super(props)
        this.fetchStudents();
    }

    async fetchStudents(){
      const data = await  fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
        .then(resq => resq.json()).then(resq => resq.data)

        this.setState({
            total:data.cont,
            students:data.findByPage
        })
    }

    handlePageChange = (target) => {
        this.setState({
            current:target
        })
        this.fetchStudents();
    }
    render() {
       console.log(this.state.students);
        return (
            <div className="container">
                  <StudentList stu = {this.state.students}/>
                 <div className="Pager">
                  
                    <Pager {...this.state} onPageChange={this.handlePageChange}/>
                 </div>

            </div>
        )
    }
}
