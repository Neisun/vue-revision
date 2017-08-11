import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import One from "../components/one.vue"
import Two from "../components/two.vue"
import Three from "../components/three.vue"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [    
    {
      path: '/',
      name: 'one',
      component: One
    },
    {
      path: '/one',
      name: 'one',
      component: One
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    }
  ]
})
