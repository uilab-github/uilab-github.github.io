import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Members from './views/Members.vue'
import Research from './views/Research.vue'
import Links from './views/Links.vue'
import Contact from './views/Contact.vue'
import JoinUs from './views/Joinus.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    },
    {
      path: '/research',
      name: 'research',
      component: Research
    },
    {
      path: '/links',
      name: 'links',
      component: Links
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/joinus',
      name: 'joinus',
      component: JoinUs
    }
  ]
})

// // route level code-splitting
// // this generates a separate chunk (about.[hash].js) for this route
// // which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
