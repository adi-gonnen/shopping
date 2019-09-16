<template>
  <div class="hello">
    <ul class="list-container">
      <li v-for="(item, idx) in items" :key="idx">
        <ShoppingItem :item="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ShoppingItem from "@/components/ShoppingItem.vue";
export default {
  name: "ShoppingList",
  components: {
    ShoppingItem
  },
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.getList;
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.list-container {
  margin-bottom: 20px;
}
</style>
