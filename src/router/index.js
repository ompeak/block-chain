import Vue from 'vue'
import Router from 'vue-router'
import Information from '@/components/Information'
import InformationDetail from '@/components/InformationDetail'
import Home from '@/components/Home'
import News from '@/components/News'
import List from '@/components/List'
import Navigation from '@/components/navigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'information',
      component: Information
    },
    {
      path: '/informationdetail?id:id',
      name: 'informationdetail',
      component: InformationDetail
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
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: Navigation
    }
  ]
})
