<template>
  <div class="edit-btns-container row">
    <button class="btn edit-btn">
      <font-awesome-icon icon="sort-amount-down"/>
    </button>
    <button class="btn edit-btn">
      <font-awesome-icon icon="trash-alt"/>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

.edit-btns-container {
   width: 95%;
    position: absolute;
    bottom: 15px;
    left: 0;
    margin: 0 10px;
    justify-content: space-between;
}
.edit-btn {
    min-width: 160px;
    height: 40px;
    font-size: 20px;
}
</style>
