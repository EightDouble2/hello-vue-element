import Vue from 'vue'
import Router from 'vue-router'

import Login from "@/views/Login";
import Main from "@/views/Main";

import Index1 from "@/views/index/Index1";
import Index2 from "@/views/index/Index2";

import NotFount from '@/views/404';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Main',
      path: '/main',
      component: Main,
      children: [
        {
          name: 'Index1',
          path: '/index/index1/:id',
          component: Index1
        },
        {
          name: 'Index2',
          path: '/index/index2/:id',
          component: Index2,
          props: true
        }
      ]
    },
    {
      name: 'Home',
      path: '/home',
      redirect: '/main'
    },
    {
      name: 'NotFount',
      path: '*',
      component: NotFount
    }
  ]
});
