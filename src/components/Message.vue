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

<style lang="scss" scoped>
.message {
  width: 900px;
  margin: 20px auto;
  padding: 20px 0;
  color: #fff;
  background-color: rgba(255,255,255,0.2);
}
.message > img {
  width: 200px;
}
// 手机兼容处理 宽度小于568px
 @media screen and (max-width: 568px) {
  .message {
     min-width: 320px;
     width: calc(100% - 20px);
     box-shadow: none;
     border-radius: 5px;
    }
 }
</style>