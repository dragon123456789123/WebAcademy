import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1'
import test2 from '@/components/test2'
import test3 from '@/components/test3'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Main from '@/components/Main'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test',
      name: 'test',
      component: test1
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
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
  ]
})
