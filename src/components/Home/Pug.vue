<template lang="pug">
  .home-box
    Header
    .home-content
      div pug
      .content 我是pug生效了么？
    Footer
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
  activated () {},
  updated () {},
  beforeRouteUpdate () {},
  filter: {},
  computed: {},
  watch: {},
  methods: {}
}
</script>
<style lang="stylus" scoped>
  .home-box
    .home-content
      width 1300px
      height 700px
      margin 0 auto
      background-color #fff
      color red
      font-size 16px
</style>
