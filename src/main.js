import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Team from './components/Team.vue'
import Contact from './components/Contact.vue'

require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(VueRouter)

const routes = [
  { path: '/home', alias: '/', component: Home },
  { path: '/team', component: Team },
  { path: '/contact', component: Contact },
  { path: '/about', component: About }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
