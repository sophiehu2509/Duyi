<template>
    <div class="login">登录页面
        <button @click="handleClick"> 登录</button>
    </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            const expires = 900 *24 * 60 *1000;
            const date = new Date(+new Date() + expires);

            document.cookie = `login=true;expires=${date.toUTCString()}`
        }
    }
}
</script>