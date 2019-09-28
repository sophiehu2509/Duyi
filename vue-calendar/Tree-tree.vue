<template>
  <ul class="tree">
      <li
        v-for="(item, index) in treeData"
        :key="item.name"
        class="tree-li"
        :class="{
          'scope':item.children,
          'active': showChildren[index]
        }"
      >
       <span @click="handleClick(index)">{{ item.name }}</span>
    
        <!-- <ul v-if="showChildren[index]">
          <li>234</li>
        </ul> -->

        <!-- 递归组件的使用 -->
        <!-- v-if 会把不需要的部分移出 -->
        <!-- v-show 会改变display 但是元素不会消失 -->
        <tree v-show="showChildren[index]"
        v-if="alreadyShow[index]"
        :tree-data="item.children"/>
      </li>
      
  </ul>
</template>

<script>
export default {
    name:"tree",
    props:['tree-data'],
    data(){
      return {
        // flag:false,
        showChildren:[],
        alreadyShow:[]
      }
    },
    methods:{
     handleClick (index) {
      // this.flag = !this.flag;

      // this.showChildren[index] = !this.showChildren[index];

      this.showChildren.splice(index, 1, !this.showChildren[index]);

      if(!this.alreadyShow[index]) {
        this.alreadyShow.splice(index, 1, true);
      }
    }
    }
   
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

@font-face {
  font-family: 'iconfont';
  src: url('./static/iconfont.eot');
  src: url('./static/iconfont.eot?#iefix') format('embedded-opentype'),
        url('./static/iconfont.woff2') format('woff2'),
        url('./static/iconfont.woff') format('woff'),
        url('./static/iconfont.ttf') format('truetype'),
        url('./static/iconfont.svg#iconfont') format('svg');
}

.tree-li {
  font-size: 14px;
  margin-left: 30px;
  cursor: pointer; 
}

.scope::before {
  display: inline-block;
  content: '\e65a';
  font-family: 'iconfont';
}

.active::before {
  transform: rotateZ(-90deg);
}
</style>



