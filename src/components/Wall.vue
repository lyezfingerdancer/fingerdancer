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
  width: 100%;
  color: #fff;
}
.wall > img {
  width: 200px;
}
</style>
