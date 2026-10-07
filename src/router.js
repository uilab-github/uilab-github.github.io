import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Members from './views/Members.vue'
import Research from './views/Research.vue'
import Demos from './views/Demos.vue'
import Links from './views/Links.vue'
import Contact from './views/Contact.vue'
import JoinUs from './views/Joinus.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    let position = { x: 0, y: 0 }
    if (savedPosition) {
      position = savedPosition
    } else if (to.hash) {
      // Leave room for the fixed header
      position = { selector: to.hash, offset: { x: 0, y: 90 } }
    }
    if (to.path === from.path || !from.matched.length) {
      return position
    }
    // Wait until the new page is mounted (the old one fades out first)
    return new Promise(resolve => {
      this.app.$once('page-entered', () => resolve(position))
    })
  },
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
      path: '/demos',
      name: 'demos',
      component: Demos
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
