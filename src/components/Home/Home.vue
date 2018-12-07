<template>
  <div class="home-box">
    <!-- 1.0 头部 -->
    <Header />
    <!-- 2.0 主页主体 -->
    <div class="home-content">
      我是home主页1
      <h2>我改动了：增加了远程develop分支和本地的develop</h2>
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
  }
}
</style>
