<template>
  <div id="app">
      <div class="nav">
        <div class="item" @click="select(1)" :style="[defaultSelect == 1 ? styles : '']"><a href="index.html"><div class="item-b">主页</div></a></div>
        <div class="item" @click="select(2)" :style="[defaultSelect == 2 ? styles : '']" > <router-link to="/wall"><div class="item-b">照片墙</div> </router-link></div>
        <div class="item" @click="select(3)" :style="[defaultSelect == 3 ? styles : '']" > <router-link to="/message"><div class="item-b">留言墙</div> </router-link></div>
        <div class="item" @click="select(4)" :style="[defaultSelect == 4 ? styles : '']" > <router-link to="/about"> <div class="item-b">关于</div> </router-link></div>
        <div class="item" @click="select(5)" :style="[defaultSelect == 5 ? styles : '']" ><a href="https://github.com/pengqiangsheng" target="_blank"><div class="item-b">联系我</div> </a></div>
      </div>
      <div class="app-content"> 
        <router-view></router-view>
      </div>
      <div class="app-bg"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      defaultSelect: 1
    }
  },
  watch: {
    $route(to) {
      let index = document.getElementById('index')
      if(to.fullPath.indexOf('index.html')) {
        index.style.display = ""
      }
    }
  },
  methods: {
    select (index) {
      this.defaultSelect = index
       /* eslint-disable */
      console.log(this.defaultSelect)
    }
  },
  computed: {
    styles () {
      let style = {
        backgroundColor: 'rgba(255,255,255,0.3)'
      }
      return style;
    }
  }
}
</script>

<style  lang="scss">
#app {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 40px;
    background-color: rgba(255,255,255,0.2);
    box-shadow: 0 2px 6px rgba(0,0,0,0.6);
    .item {
      float: left;
      width: 100px;
      height: 100%;
      color: white;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      .item-b {
        height: 100%;
        width: 100%;
      }
    }
    .item:last-child {
      float: right;
      right: 20px;
    }
    .item:hover {
      background-color: rgba(255,255,255,0.1);
    }
  }
  .app-content {
    position: relative;
    top: 80px;
    height: calc(100% - 80px);
    width: 100%;
    z-index: 1001;
  }
  .app-bg {
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    background: url("/bg1.jpg") no-repeat fixed;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    z-index:1000;  
  }

}
</style>
