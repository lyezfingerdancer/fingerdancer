<template>
  <div id="app">
      <div class="nav">
        <div class="item">指舞社</div>
        <div class="item"><a href="/index.html">主页</a></div>
        <div class="item"> <router-link to="/hello">照片墙</router-link></div>
        <div class="item">活动</div>
        <div class="item">关于</div>
        <div class="item">联系我</div>
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
  watch: {
    $route(to) {
      let index = document.getElementById('index')
      if(to.fullPath.indexOf('index.html')) {
        index.style.display = ""
      }
    }
  },
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
    }
    .item:last-child {
      float: right;
    }
  }
  .app-content {
    position: relative;
    top: 40px;
    width: 100%;
    z-index: 1001;
  }
  .app-bg {
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    background: url("./assets/ontheway.jpg") no-repeat fixed;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    z-index:1000;  
  }
}
</style>
