<template>
  <div class="home">
    <AddBtn/>
    <ShoppingList/>
    <EditBtns/>
  </div>
</template>

<script>
import AddBtn from '@/components/AddBtn.vue'
import ShoppingList from '@/components/ShoppingList.vue'
import EditBtns from '@/components/EditBtns.vue'

export default {
  name: 'home',
  components: {
    AddBtn,
    ShoppingList,
    EditBtns
  },
   created() {
    this.$store.dispatch('loadList')
   }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

</style>
