import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home' // 引入Home组件

Vue.use(Router)

// 路由配置
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
