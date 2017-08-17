<template>
  <div>
      <header>
          <slot name="header"></slot>
      </header>
      <main>
          <slot name="main"></slot>
      </main>
      <footer>
          脚部啦
          <slot name="footer"></slot>
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  
</style>
