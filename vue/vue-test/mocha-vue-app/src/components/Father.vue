<template>
    <div>
        <son
        :name="name"
        :age="age"
        :fn="changeAge"
        @show="showInfo"
        />
        <div
           v-if="show"
           class="info"
           :style="{
               margin:'20px 0',
               padding:'50px 0',
               border:'1px solid red'
           }"
        >
            姓名：yeye <br />
            年龄：{{ age }} <br />
            爱好：男 <br />
            长相：秀色可餐 <br />
        </div>
    </div>   
</template>

<script>
import Son from './Son';

export default {
    components:{
        Son
    },
    data(){
        return {
            name:'yeye',
            age:18,
            show:false
        }
    },
    methods:{
        showInfo () {
            this.show = true;
        },
        changeAge () {
            this.age = 16;
        }
    }
}
</script>