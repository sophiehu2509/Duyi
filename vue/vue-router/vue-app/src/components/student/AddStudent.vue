<template>
    <div class="add-student">
        <div>添加学生：{{ newPerson }}</div>
        <div>姓名：<input type="text" v-model="name"></div>
        <div>年龄：<input type="text" v-model="age"></div>
        <div><button @click="handleClick">添加</button></div>
        <hr />
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';


export default {
    data(){
        return{
            name:'',
            age:null

            // name:this.$store.state.name
        }
    },
    methods:{
        ...mapMutations(['changeStudentList']),
        handleClick(){
            const tempObj = {
                name: this.name,
                age: this.age,
                id: +new Date() //用for循环的话 需要key值
            }

            // this.$store.commit('changeStudentList', {tempObj, name:'duyi'});
            // this.$store.state.studentList.push(tempObj);

            // const name = this.name;
            // const age = this.age;

            // this.$store.state.name = 'sss'

            // this.changeStudentList({tempObj, name:'渡一'})
            this.$store.dispatch('changeStudentList', {tempObj, name:'duyi'});
        }
    },
    computed:{
        ...mapGetters({
      newPerson: 'person'
    })

        // ...mapState(['age', 'look']),
        // ...mapState({
        //     storeName:state => state.name
        // })
        // name(){
        //     return this.$store.state.name
        // },
        // age(){
        //     return this.$store.state.age
        // },
        // look(){
        //     return this.$store.state.look
        // }
    }

}
</script>


<style scoped>
div{
    margin-bottom:15px;
}
</style>