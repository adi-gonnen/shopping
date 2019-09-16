<template>
  <div class="add-btn-container row">
    <input class="input-add-item">
    <button class="btn btn-add-item">+</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.add-btn-container {
    min-width: 100%;
    justify-content: space-between;
    margin-bottom: 15px;
}
.input-add-item {
    height: 50px;
    width: 100%;
    font-size: 20px;
    padding: 5px;
}
.btn-add-item {
    height: 50px;
    width: 100px;
    font-size: 45px;
}
</style>
