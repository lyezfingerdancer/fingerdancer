<template>
  <div class="wall">
    <h1>照片墙</h1>
    <img src="/eye.gif">
    <h2>小姐姐是不可能有的，Never</h2>
  </div>
</template>

<script>
export default {
  name: 'Wall',
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
.wall {
  width: 900px;
  margin: 20px auto;
  padding: 20px 0;
  color: #fff;
  background-color: rgba(255,255,255,0.2);
}
.wall > img {
  width: 200px;
}
// 手机兼容处理 宽度小于568px
 @media screen and (max-width: 568px) {
  .wall {
     min-width: 320px;
     width: calc(100% - 20px);
     box-shadow: none;
     border-radius: 5px;
    }
 }
</style>
