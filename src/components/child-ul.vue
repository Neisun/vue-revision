<template>
    <ul>
        <slot name="child-ul" v-for="item in items" :text="item.text" :title="title"></slot>
    </ul>
</template>

<script>
export default {
    name:"child1",
    data:function () {
        return {
            title:"来自于子组件"
        }
    },
    props:["items"]
}
</script>

<style>
  
</style>
