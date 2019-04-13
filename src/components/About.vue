<template>
  <div class="about">
    <h1>指舞社</h1>
    <p>指舞，意为指尖上的舞蹈，手指的舞者。</p>
    <p>本社团创立于2014年，地点在龙岩二中高二13班。</p>
    <p>名字的灵感来源于我们班同学们的头脑风暴，这个名字的背后还有一个故事。</p>
    <p>那年正值青春，那年正是我高二的时候，那年的夏天，记忆中的风吹过梧桐树的感觉，至今令我难忘，所以有了这个网站。</p>
    <div class="profile">
      <div class="profile-item" v-for="(item, number) in profile" :key="number">
        <div class="item-s" @mouseenter="showTip(number)" @mouseleave="hide">
          <img :src="item.url">
        </div>
        <div class="item-t" v-if="show==number"><div class="item-text">{{item.name}}</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      show: -1,
      profile: [{url: require('../assets/h-1.jpg'), name: '知与南'},{url: require('../assets/h-2.jpg'), name: '轻舞飞扬'},{url: require('../assets/h-3.jpg'), name: '花超'}]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init () {
      let index = document.getElementById('index')
      index.style.display = "none"
    },
    showTip (index) {
      this.show = index
    },
    hide () {
      this.show = -1
    }
  },
  computed: {
    styles () {
      let style = {
        display: 'none'
      }
      return style
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  width: 900px;
  padding: 10px;
  height: 80%;
  margin: 0 auto;
  color: #fff;
  background-color: rgba(255,255,255,0.2);
  box-shadow: 0 2px 6px rgba(0,0,0,0.6);
  border-radius: 5px;
  .tips {
    position: absolute;
    left: 10%;
    bottom: 160px;
    width: 80%;
    height: 30px;
    background-color: rgba(255,255,255,0.2);
    color: #fff;
    text-align: center;
    line-height: 30px;
    .tips-item {
      float: left;
      width: 33.3%;
    }
  }
  .profile {
    position: absolute;
    left: 10%;
    bottom: 40px;
    width: 80%;
    height: 100px;
    cursor: pointer;
    .profile-item {
      float: left;
      width: 33.3%;
      height: 100%;
      .item-s {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.2);
        box-shadow: 0 2px 6px rgba(0,0,0,0.6);
        img {
          height: 100%;
        }
      }
      .item-t {
        position: absolute;
        top: -50px;
        width: 33.3%;
        height: 30px;
        text-align: center;
        line-height: 30px;
  
        .item-text {
          width: 50%;
          margin: 0 auto;
          height: 30px;
          background-color: rgba(255,255,255,0.2);
          box-shadow: 0 2px 6px rgba(0,0,0,0.6);
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
