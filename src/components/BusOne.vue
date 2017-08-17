<template>
  <div>
      <button @click="test">test</button>
  </div>
</template>

<script>
import bus from "../bus/index"
export default {
    name:"bus1",
    data:function () {
        return {

        }
    },
    methods:{
        test:function () {
            bus.$emit("test","哈哈哈哈")
        }
    }
}
</script>

<style>
  
</style>
