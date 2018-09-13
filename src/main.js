import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import './assets/styles.scss';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

const events = {
    recommended: [
        {
            id: 1,
            name: 'ABC ABC',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        },
        {
            id: 2,
            name: 'awehdjkashdjkahdjkasdkjsadhjkhsajkdhasjd',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        },
        {
            id: 3,
            name: 'assdasjgdhasghdj',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        }
    ],
    popular: [
        {
            id: 1,
            name: 'ABC ABC',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        },
        {
            id: 4,
            name: 'asd asdqwer  32  rsdasd',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        },
        {
            id: 5,
            name: 'asdasdasda c xccvsd dfasff',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        }
    ],
    category: [
        {
            id: 'iot',
            name: 'IOT'
        },
        {
            id: 'cooking',
            name: 'Cooking'
        }
    ]
};

localStorage.setItem('events', JSON.stringify(events));

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
