<template>
  <div class="hello">
    <h1>照片墙</h1>

<img src="../assets/gk6.jpg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 900px;
  margin: 0 auto;
  color: #fff;
}
.hello > img {
  width: 900px;
}
</style>
