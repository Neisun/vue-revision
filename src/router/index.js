import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Com1 from "../components/com1.vue"
import Com2 from "../components/com2.vue"
import Com3 from "../components/com3.vue"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [    
    {
      path: '/',
      name: 'com1',
      component: Com1
    },
    {
      path: '/com1',
      name: 'com1',
      component: Com1
    },
    {
      path: '/com2',
      name: 'com2',
      component: Com2
    },
    {
      path: '/com3',
      name: 'com3',
      component: Com3
    }
  ]
})
