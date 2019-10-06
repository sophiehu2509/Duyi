<template>
    <div class="student">学员展示
        <add-student />
        <student-list />
    </div>
</template>

<script>
import AddStudent from '@/components/student/AddStudent';
import StudentList from '@/components/student/StudentList';


export default {
  components: {
    AddStudent,
    StudentList
  }
}
</script>