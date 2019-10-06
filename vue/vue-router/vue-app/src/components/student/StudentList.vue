<template>
    <div class="student-list">
        <div>学生列表：{{ $store. state.name }}</div>
        <ul>
            <li
            v-for="student in studentList"
            :key="student.id"
            >
            姓名：{{ student.name }}
            年龄：{{ student.age }}
            
            </li>
            <li></li>
        </ul>
        <hr />
          <ul>
            <li
            v-for="(student, index) in newStudentList"
            :key="index"
            >
           {{ student }}
            
            </li>
            <li></li>
        </ul>
    </div>
</template>


<script>
import {mapState, mapGetters} from 'vuex';

export default {
    computed: {
        ...mapState(['studentList']),
        ...mapGetters(['newStudentList'])
    }
}
</script>

<style scoped>
ul{
    margin-top:15px;
}

li{
    margin-bottom:15px;
}

</style>