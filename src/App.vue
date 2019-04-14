<template>
  <div id="app">
      <div class="nav">
        <div class="nav-toggle">
          <div class="nav-icon" @click="toggle">
            <span class="btn-bar"></span>
            <span class="btn-bar"></span>
            <span class="btn-bar"></span>
          </div>
          <div class="nav-meta">龙岩二中指舞社</div>
        </div>
        <div class="nav-wrapper" ref="navWrapper" >
          <div class="item" @click="select(1)" :style="[defaultSelect == 1 ? styles : '']">
            <a href="index.html"><div class="item-b">主页</div><span class="pointer" :style="[defaultSelect == 1 ? styleDisplay : '']"></span></a>
          </div>
          <div class="item" @click="select(2)" :style="[defaultSelect == 2 ? styles : '']" >
            <router-link to="/wall"><div class="item-b">照片墙</div><span class="pointer" :style="[defaultSelect == 2 ? styleDisplay : '']"></span></router-link>
          </div>
          <div class="item" @click="select(3)" :style="[defaultSelect == 3 ? styles : '']" >
            <router-link to="/message"><div class="item-b">留言墙</div> <span class="pointer" :style="[defaultSelect == 3 ? styleDisplay : '']"></span></router-link>
          </div>
          <div class="item" @click="select(4)" :style="[defaultSelect == 4 ? styles : '']" >
            <router-link to="/about"> <div class="item-b">关于</div><span class="pointer" :style="[defaultSelect == 4 ? styleDisplay : '']"></span> </router-link>
          </div>
          <div class="item" @click="select(5)" :style="[defaultSelect == 5 ? styles : '']" >
            <a href="https://forever.netlify.com" target="_blank"><div class="item-b">联系我</div> <span class="pointer" :style="[defaultSelect == 5 ? styleDisplay : '']"></span></a>
          </div>
        </div>
     
      </div>
      <div class="app-content" :class="[show&&!isPc ? 'content-enter': 'content-leave']"> 
        <router-view></router-view>
        <div class="footer">
          <div class="copyright">© 
            <span class="copyright-year">2014-2019</span>
            <span class="author">知与南</span>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      defaultSelect: 1,
      show: false,
      isPc: true
    }
  },
  mounted () {
    this.displayNav()
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
      this.toggle()
    },
    toggle () {
      this.show = !this.show
      this.displayNav()
    },
    displayNav () {
      // 先判断设备大小
      let width = document.body.clientWidth
      if(width < 568) {
        this.isPc = false
        if(this.show) {
          setTimeout(() => {
            this.$refs.navWrapper.style.display = 'block';
          },250)
        }else {
            this.$refs.navWrapper.style.display = 'none';
        }
      }
    }
  },
  computed: {
    styles () {
      let style = {
        backgroundColor: 'rgba(255,255,255,0.3)'
      }
      return style
    },
    styleDisplay () {
      let style = {
        display: 'block'
      }
      return style
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
  overflow: auto;
  text-align: center;
  background-image:  url("/bg1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1003;
    width: 100%;
    background-color: rgba(255,255,255,0.2);
    box-shadow: 0 2px 6px rgba(0,0,0,0.6);
    .nav-toggle {
      position: relative;
      display: none;
    }
    .nav-wrapper {
      width: 920px;
      margin: 0 auto;
    }
    .item {
      float: left;
      width: 100px;
      height: 40px;
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
    }
    .item:hover {
      background-color: rgba(255,255,255,0.1);
    }
  }
  .app-content {
    width: 900px;
    padding: 10px;
    background-color: rgba(255,255,255,0.2);
    box-shadow: 0 2px 6px rgba(0,0,0,0.6);
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    margin-bottom: 20px;
    .footer {
      width: 100%;
      padding: 20px 0;
      min-height: 20px;
      text-align: center;
      font-size: 14px;
      color: rgb(197, 197, 197);
    }
  }

 
}
// 手机兼容处理 宽度小于568px
@media screen and (max-width: 568px) {
    #app {
    overflow: auto;
    .nav {
      z-index: 1002;
      box-shadow: none;
      background-color: rgba($color: #000000, $alpha: 0);
      .nav-toggle {
        padding: 20px;
        height: 40px;
        display: block;
        background-color: rgba(255, 255, 255, 0.2);
        border-bottom: #7189f1 1px solid;
        .nav-meta {
          color: #fff;
          font-size: 24px;
          line-height: 40px;
        }
        .nav-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          padding: 10px;
          transform: translate(0%,-50%);
          .btn-bar {
            display: block;
            width: 22px;
            height: 2px;
            background: #555;
            border-radius: 1px;
            background-color: #fff;
             &.btn-bar:first-child {
              margin-bottom: 4px;
            }
            &.btn-bar:last-child {
              margin-top: 4px;
            }
          }
        }
      }
      .item {
        position: relative;
        height: 36px;
        width: calc(100% - 40px);
        padding: 0 20px;
        text-align: left;
        line-height: 36px;
        float: none;
        font-size: 14px;
        &.item:last-child {
          float: none;
          right: 0;
        }
        .pointer{
          content: " ";
          position: absolute;
          display: none;
          top: 50%;
          margin-top: -3px;
          right: 15px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #fff;
        }
      }
    }
    .app-content {
      width: calc(100% - 40px);
      margin-top: 100px;
    }
  }
}
// 动画
.content-enter {
  transform: translate3d(0, 180px, 0);
  transition: all .3s linear;
}
.content-leave {
  transform: translate3d(0, 0, 0);
  transition: all .3s linear;
}

</style>
