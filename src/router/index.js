import Vue from 'vue';
import Router from 'vue-router';
import Home from '../page/home/index';
import List from '../page/list/index';

Vue.use(Router);

// todo  这里可以加个路由控制权限  现在暂时是加再room页面的
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
    ]
});
