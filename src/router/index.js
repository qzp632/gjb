import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'
import city from '@/components/home/homeList/cityList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
