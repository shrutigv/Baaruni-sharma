import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Youtube from './components/Youtube.vue'
import Instagram from './components/Instagram.vue'
import Invitation from './components/Invitation.vue'
import BirthdayCard from './components/BirthdayCard.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/invitation',
      name: 'Invitation',
      component: Invitation
    },
    {
      path: '/birthday',
      name: 'BirthdayCard',
      component: BirthdayCard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    // {
    //   path: '/lastestUpdate',
    //   name: 'Latest update',
    //   component: Latest-update
    // },
    {
      path: '/instagram',
      name: 'Instagram',
      component: Instagram
    },
    {
      path: '/youtube',
      name: 'Youtube',
      component: Youtube
    }
  ]
})