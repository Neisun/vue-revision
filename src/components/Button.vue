<template>
  <div>
    <button @click="add">{{counter}}</button>
  </div>
</template>
<script>
export default {
  name:"Btn",
  data:function () {
      return {
          counter:0,
      }
  },
  methods:{
      add:function () {
          this.counter+=1;
          this.$emit("add");
      }
  }
}
</script>
<style>

</style>


