<template>
   <div class="student-list content" id="student-list">
     <search></search>
     <stu-table></stu-table>
     <turn-page></turn-page>
    <transition>
      <modal v-if="showModal"></modal> 
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import search from '../components/stuList/search.vue'
import stuTable from '../components/stuList/stuTable.vue'
import turnPage from '../components/stuList/turnPage.vue'
import modal from '../components/stuList/modal.vue'

export default {
  components: {
    modal,
    search,
    stuTable,
    turnPage
  },
  computed:{
    showModal(){
      return this.$store.state.showModal;
    }
  }
}
</script>
