<template>
    <span>
        $
        <input type="text" :value="value" ref="input" @input="updateValue($event.target.value)">
    </span>
</template>
<script>
export default {
    name: "price",
    data: function () {
        return {

        }
    },
    props: ["value"],
    methods: {
        // 更新数据
        updateValue: function (value) {
            var index = 0;
            // if (value.indexOf(".")===-1) {
            //     index = value.length;
            // }else {
            //     index = value.indexOf(".")+3;
            // }
            // 简化一下代码
            value.indexOf(".") === -1 ? index = value.length : index = value.indexOf(".") + 3;
            // 格式化值
            var formattedValue = value.trim().slice(0, index);
            // 判断当前的值是不是和标准一致，不一致就手动更新数据
            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue;
            }
            // 向上触发input事件，并上传格式化的数值
            this.$emit("input", Number(formattedValue));
        }
    }
}
</script>
<style>

</style>


