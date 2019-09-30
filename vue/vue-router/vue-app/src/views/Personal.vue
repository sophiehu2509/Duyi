<template>
    <div class="personal">
        姓名：<input type="text" v-model="name">
        <button @click="handleClick">确定</button>
    </div>
</template>

<script>
//导航守卫
export default {
    //当url将要改变的时候会执行的函数
    beforeRouteLeave(to, from, next){
            if(this.name){
               console.log("1")
               const flag = window.confirm('立刻离开？');
               if(flag){
                   this.name = '';
                   next();
               }

            }else{
                 console.log("2")
                next();
            }
        },
    data(){
        return {
            name:''
        }
    },
    methods:{
        
        handleClick(){
            this.name = '';
        }
    }
}
</script>

<style scoped>
button{
    margin-left:15px;
}
</style>