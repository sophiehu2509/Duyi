<template>
    <div class="search">
        <input type="text" id="search-inp" v-modal="keyword"/>
        <button id="search-btn" @click="search">搜索</button>
     </div>
</template>

<script>
export default {
    data(){
        return {
            keyword:''
        }
    },
    methods:{
        search(){
            this.$store.dispatch('search', this.keyword).then(data => {
                this.$toast(data)
            })
        }
    }
}
</script>