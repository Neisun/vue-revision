<template>
    <div>
        <input type="checkbox" :value="value" ref="radio" @change="update($event.target.value)" name="test">
    </div>
</template>

<script>
export default {
    name: "mySelect",
    model: {
        prop: "checked",
        event: "change"
    },
    props: {
        checked: Boolean,
        value: String
    },
    methods: {
        update: function (value) {
            this.$emit("change", value)
        }
    }
}
</script>

<style>

</style>
