import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from "@/views/Login.vue";
import Error from "@/views/Error.vue";

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/error',
            component: Error
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
});

// router.beforeEach((to, from, next) => {
//     const publicRoutes = ['/', '/error'];
//     const authRequired = !publicRoutes.includes(to.path);
//     const loggedIn =localStorage.getItem('user');
//
//     if(authRequired && !loggedIn){
//         return next('/')
//     }
//     next();
// });

export default router
