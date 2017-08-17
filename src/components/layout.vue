<template>
  <div>
      <header>
          header部分
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
          footer部分
      </footer>

  </div>
</template>

<script>
export default {
    name:"layout",
}
</script>

<style>
  header {
      text-align: center;
      height: 20px;
      line-height: 20px;
      background: pink;
      color: #fff;
  }
  main {
      text-align: center;
      height: 50px;
      background: lightgreen;
      color: #fff;
  }
  footer {
      text-align: center;
      height: 20px;
      background: blueviolet;
      color: #fff;
  }
</style>
