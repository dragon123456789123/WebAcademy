import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/Landing'
import Units from '@/components/Units'
import Lessons from '@/components/Lessons'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Create from '@/components/Adders/AddClass'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/units',
      name: 'units',
      component: Units
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: Lessons
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
  ]
})
