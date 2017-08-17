<template>
    <div>
        {{msg}}
    </div>
</template>

<script>
import bus from "../bus/index"
export default {
    name: "bus2",
    data: function () {
        return {
            msg: "",
        }
    },
    methods: {

    },
    created:function () {
        var _this = this;
        bus.$on("test",function (msg) {
            _this.msg = msg;
        })
    }
}
</script>

<style>

</style>
