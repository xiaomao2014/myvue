<template>
  <div class="home-box">
    <!-- 1.0 头部 -->
    <Header />
    <!-- 2.0 主页主体 -->
    <div class="home-content">
      <!-- 我是home主页1
      我在 develop分支上
      <h4>我是fixbug修复的bug</h4>
      <h3>我是master上拉出来的fix分支改紧急bug的</h3>
      <br> -->
      <h5>element-ui组件使用</h5>
      <el-button
        type="primary"
        @click="jumpPug"
      >
        主要按钮/跳转pug页面
      </el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <div>
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      </div>
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
    return {
      tableData:
      [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  created () {},
  mounted () {},
  activated () {},
  updated () {},
  beforeRouteUpdate () {},
  filter: {},
  computed: {},
  watch: {},
  methods: {
    jumpPug () {
      this.$router.push('/Pug')
      this.$router.push({ path: '/Pug' })
    }
  }
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
