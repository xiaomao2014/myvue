<template>
  <div class="home-box">
    <!-- 1.0 头部 -->
    <Header />
    <!-- 2.0 主页主体 -->
    <div class="home-content">
      我是home主页1
      我在 develop分支上
      <h4>我是fixbug修复的bug</h4>
      <h3>我是master上拉出来的fix分支改紧急bug的</h3>
    </div>
    <!-- 3.0 尾部 -->
    <Footer />
  </div>
</template>
<script>
import Header from '../Common/Header'
import Footer from '../Common/Footer'
export default {
  components: {
    Header,
    Footer
  },
  // props,
  data () {
    return {}
  },
  created () {},
  mounted () {},
  activited () {},
  updated () {},
  beforeRouteUpdate () {},
  filter: {},
  computed: {},
  watch: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.home-box {
  .home-content {
    width: 1300px;
    height: 700px;
    margin: 0 auto;
    background-color: #fff;
    h4 {
      color: red;
    }
  }
}
</style>
