<template>
    <div>
        <li>
            {{title}}
            <button @click="del">X</button>
        </li>
    </div>
</template>
<script>
export default {
    name: "toDo",
    data: function () {
        return {

        }
    },
    props: {
        title: {

        }
    },
    methods:{
        del:function () {
            // 把删除的按钮直接放在组件中，然后需要在父组件中v-on:del="handler"，触发父组件中的handler事件
            this.$emit("del")
        }
    }
}
</script>
<style>

</style>

