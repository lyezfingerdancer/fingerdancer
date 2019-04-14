<template>
  <div class="message">
    <h1>留言墙</h1>
    <img src="/sleep.jpg">
    <h2>努力开发中...</h2>
  </div>
</template>

<script>
export default {
  name: 'Message',
  mounted() {
    this.init()
  },
  methods: {
    init () {
      let index = document.getElementById('index')
      index.style.display = "none"
    }
  }
}
</script>

<style scoped>
.message {
  width: 900px;
  margin: 0 auto;
  color: #fff;
}
.message > img {
  width: 200px;
}
</style>