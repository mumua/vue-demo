import Vue from 'vue';
import Router from 'vue-router';
import Headertop from '@/components/Headertop';
import HelloWorld from '@/components/HelloWorld';
import login from '@/components/login';
import Register from '@/components/Register';
import Coptright from '@/components/FooterCopyright';
import UserManage from '@/view/UserManage';
import IndexView from '@/components/IndexView';
import Statistics from '@/view/Statistics';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: '/vuedemo/',
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: '/',
      components: {
        default: Headertop,
        Coptright: Coptright
      },
      children: [
        {
          path: 'index',
          name: 'usermanage',
          component: IndexView
        },
        {
          path: 'hello',
          name: 'usermanage',
          component: HelloWorld
        },
        {
          path: 'getlist',
          name: 'content',
          component: UserManage
        },
        {
          path: 'statistics',
          component: Statistics
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/getlist',
      name: 'usermanage',
      component: UserManage
    }
  ]
});
