<template>
  <div>
      <li>{{childData.name}}</li>
  </div>
</template>
<script>
    export default ({
        name:"child",
        data:function () {
            return {

            }
        },
        props:["childData"]
    })
</script>
<style>

</style>
