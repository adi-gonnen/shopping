<template>
    <div class="item-container row">
        <input type="radio" class="item-checkbox">
        <p class="item-name">{{item.name}}</p>
        <font-awesome-icon :icon="item.icon" :style="`color: ${item.color}`" :class="item.color" class="item-icon row"/>
        <p class="item-count row">{{item.count}}</p>
    </div>
</template>

<script>
export default {
    name: 'ShopppingItem',
    props: ['item'],
    mounted() {
        console.log('item', this.item);
    }

}
</script>


<style lang="scss">
@import "@/assets/scss/colors.scss";
.item-container {
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin-bottom: 14px;
}
.item-checkbox {
    width: 30px;
    height: 30px;
}
.item-name {
    width: 100%;
    margin: 0 5px;
    height: 35px;
    border: 1px solid;
    padding: 5px;
    background-color: #f9f6ee;
}
.item-icon {
    margin: 0 5px;
}
.item-count,
.item-icon {
    border: 1px solid #000000;
    min-width: 35px;
    height: 35px;
    padding: 2px;
    justify-content: center;
    align-items: center;
}

</style>
