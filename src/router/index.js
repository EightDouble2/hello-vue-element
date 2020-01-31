import Vue from 'vue'
import Router from 'vue-router'

import Login from "@/views/Login";
import Main from "@/views/Main";

import Index1 from "@/views/index/Index1";
import Index2 from "@/views/index/Index2";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Main',
      path: '/Main',
      component: Main,
      children: [
        {
          name: 'Index1',
          path: '/index/index1',
          component: Index1
        },
        {
          name: 'Index2',
          path: '/index/index2',
          component: Index2
        }
      ]
    }
  ]
});
