import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/index'
import allBuildings from '@/components/newHouses/allBuildings/index'
import buildingsDetails from '@/components/newHouses/buildingsDetails/index'
import cityChange from '@/components/cityChange/cityChange'
import buildingsSearch from '@/components/buildingsSearch/buildingsSearch'

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
    {
      path: '/cityChange',
      name: 'cityChange',
      component: cityChange
    },
    {
      path: '/buildingsSearch',
      name: 'buildingsSearch',
      component: buildingsSearch
    },
  ]
})
