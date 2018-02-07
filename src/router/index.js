import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/index'
import allBuildings from '@/components/newHouses/allBuildings/index'
import buildingsDetails from '@/components/newHouses/buildingsDetails/index'
import cityChange from '@/components/cityChange/cityChange'
import buildingsSearch from '@/components/buildingsSearch/buildingsSearch'
import pwdLogin from '@/components/loginAndRegister/pwdLogin'
import vcLogin from '@/components/loginAndRegister/vcLogin'
import memberRegister from '@/components/loginAndRegister/memberRegister'
import agentRegister from '@/components/loginAndRegister/agentRegister'
import teamRegister from '@/components/loginAndRegister/teamRegister'
import addTeamMember from '@/components/loginAndRegister/addTeamMember'
import agentCompany from '@/components/loginAndRegister/agentCompany'
import decorationCompany from '@/components/loginAndRegister/decorationCompany'
import certifiedDesigner from '@/components/loginAndRegister/certifiedDesigner'
import payCashDeposit from '@/components/loginAndRegister/payCashDeposit'
import designerRegister from '@/components/loginAndRegister/designerRegister'
import choiceIdentity from '@/components/loginAndRegister/choiceIdentity'
import agent from '@/components/loginAndRegister/agent'
import teamMemberRegister from '@/components/loginAndRegister/teamMemberRegister'
import getBackPasswordFirst from '@/components/loginAndRegister/getBackPasswordFirst'
import getBackPasswordSecond from '@/components/loginAndRegister/getBackPasswordSecond'
import reviewResult from '@/components/loginAndRegister/reviewResult'
import findRoom from '@/components/findRoom/findRoom'
import propertyComparison from '@/components/newHouses/propertyComparison/propertyComparison'
import condoTour from '@/components/condoTour/condoTour'

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
    {
      path: '/pwdLogin',
      name: 'pwdLogin',
      component: pwdLogin
    },
    {
      path: '/vcLogin',
      name: 'vcLogin',
      component: vcLogin
    },
    {
      path: '/memberRegister',
      name: 'memberRegister',
      component: memberRegister
    },
    {
      path: '/agentRegister',
      name: 'agentRegister',
      component: agentRegister
    },
    {
      path: '/teamRegister',
      name: 'teamRegister',
      component: teamRegister
    },
    {
      path: '/addTeamMember',
      name: 'addTeamMember',
      component: addTeamMember
    },
    {
      path: '/agentCompany',
      name: 'agentCompany',
      component: agentCompany
    },
    {
      path: '/decorationCompany',
      name: 'decorationCompany',
      component: decorationCompany
    },
    {
      path: '/certifiedDesigner',
      name: 'certifiedDesigner',
      component: certifiedDesigner
    },
    {
      path: '/payCashDeposit',
      name: 'payCashDeposit',
      component: payCashDeposit
    },
    {
      path: '/designerRegister',
      name: 'designerRegister',
      component: designerRegister
    },
    {
      path: '/choiceIdentity',
      name: 'choiceIdentity',
      component: choiceIdentity
    },
    {
      path: '/agent',
      name: 'agent',
      component: agent
    },
    {
      path: '/teamMemberRegister',
      name: 'teamMemberRegister',
      component: teamMemberRegister
    },
    {
      path: '/getBackPasswordFirst',
      name: 'getBackPasswordFirst',
      component: getBackPasswordFirst
    },
    {
      path: '/getBackPasswordSecond',
      name: 'getBackPasswordSecond',
      component: getBackPasswordSecond
    },
    {
      path: '/reviewResult',
      name: 'reviewResult',
      component: reviewResult
    },
    {
      path: '/findRoom',
      name: 'findRoom',
      component: findRoom
    },
    {
      path: '/propertyComparison',
      name: 'propertyComparison',
      component: propertyComparison
    },
    {
      path: '/condoTour',
      name: 'condoTour',
      component: condoTour
    },
  ]
})
