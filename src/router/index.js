import Vue from 'vue'
import Router from 'vue-router'
import Information from '@/components/Information'
import Home from '@/components/Home'
import News from '@/components/News'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'information',
      component: Information
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
