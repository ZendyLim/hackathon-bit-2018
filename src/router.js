import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import App from './views/App.vue';
import SignUp from './views/SignUp.vue';
import Interest from './views/Interest.vue';
import Chat from './views/chat/Chat.vue';
import ChatHome from './views/chat/Home.vue';
import Event from './views/event/Event.vue';
import EventHome from './views/event/Home.vue';
import EventDetail from './views/event/Detail.vue';

Vue.use(Router);

const outGuard = (to, from, next) => {
    if (localStorage.getItem("loggedIn")) {
        next('/app/event')
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
            path: '/app',
            name: 'app',
            component: App,
            children: [
                {
                    path: 'chat',
                    name: 'chat',
                    component: Chat,
                    children: [
                        {
                            path: '',
                            name: 'chatHome',
                            component: ChatHome
                        }
                    ]
                },
                {
                    path: 'event',
                    name: 'event',
                    component: Event,
                    children: [
                        {
                            path: '',
                            name: 'EventHome',
                            component: EventHome
                        },
                        {
                            path: 'detail/:id',
                            name: 'EventDetail',
                            component: EventDetail
                        }
                    ]
                }
            ]
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
