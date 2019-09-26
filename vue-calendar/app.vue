<template>
    <div>
        <calendar />
    </div>
</template>

<script>
import Calendar from './calendar';

export default {
    data(){
        return {
            msg:'hello world'
        }
    },
    components:{
        Calendar
    }
}
</script>

<style>
div{
    /* background-color:red; */
    color:#000;
}
</style>