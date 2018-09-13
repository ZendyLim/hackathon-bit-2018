import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import SignUp from './views/SignUp.vue';
import Interest from './views/Interest.vue';

Vue.use(Router);

const outGuard = (to, from, next) => {
    if (localStorage.getItem("loggedIn")) {
        next('/dashboard')
    }
    next();
};

const inGuard = (to, from, next) => {
    if (localStorage.getItem("loggedIn") !== 'true') {
        next('/login')
    }
    next();
};

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: outGuard
        },
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
            beforeEnter: inGuard
        },
        {
            path: '/signup',
            name: 'signUp',
            component: SignUp,
            beforeEnter: outGuard
        },
        {
            path: '/interest',
            name: 'interest',
            component: Interest,
            beforeEnter: inGuard
        }
    ]
})
