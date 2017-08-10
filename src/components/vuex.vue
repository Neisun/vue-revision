<template>
  <div>
      <button type="button" @click="add">点击加1</button>
  </div>
</template>
<script>
import {mapActions} from "vuex"
  export default {
    data:function () {
      return {

      }
    },
    methods:{
      ...mapActions([
        "add"
      ])
    },
    computed:{

    }
  }
</script>
<style>

</style>


