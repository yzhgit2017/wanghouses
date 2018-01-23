import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/index'
import allBuildings from '@/components/newHouses/allBuildings/index'
import buildingsDetails from '@/components/newHouses/buildingsDetails/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/allBuildings',
      name: 'allBuildings',
      component: allBuildings
    },
    {
      path: '/buildingsDetails',
      name: 'buildingsDetails',
      component: buildingsDetails
    },
  ]
})
