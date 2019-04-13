<template>
  <div class="wall">
    <h1>照片墙</h1>
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

<style scoped>
.wall {
  width: 900px;
  margin: 0 auto;
  color: #fff;
}
.wall > img {
  width: 900px;
}
</style>
