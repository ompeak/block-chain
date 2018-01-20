import Vue from 'vue'
import Router from 'vue-router'
import Information from '@/components/Information'
import InformationDetail from '@/components/InformationDetail'
import Home from '@/components/Home'
import News from '@/components/News'
import List from '@/components/List'
import Navigation from '@/components/navigation'
import WalletList from '@/components/walletList'
import Investor from '@/components/Investor'
import Apps from '@/components/Apps'
import AppsDetail from '@/components/AppsDetail'
import Notes from '@/components/Notes'
import NotesDetail from '@/components/NotesDetail'
import Activity from '@/components/Activity'
import ActivityDetail from '@/components/ActivityDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'information',
      component: Information
    },
    {
      path: '/informationdetail/:id',
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
    },
    {
      path: '/walletList/:id',
      name: 'WalletList',
      component: WalletList
    },
    {
      path: '/investor',
      name: 'Investor',
      component: Investor
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps
    },
    {
      path: '/appsdetail/:id',
      name: 'appsdetail',
      component: AppsDetail
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes
    },
    {
      path: '/notesdetail/:id',
      name: 'notesdetail',
      component: NotesDetail
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/activitydetail/:id',
      name: 'activitydetail',
      component: ActivityDetail
    }
  ]
})
