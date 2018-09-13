import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import './assets/styles.scss';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

const events = {
    data: [
        {
            id: 1,
            name: 'IOT Pizza Using RaspberrPI Workshop',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        },
        {
            id: 2,
            name: 'Event 2',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        },
        {
            id: 3,
            name: 'Event 3',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        },
        {
            id: 4,
            name: 'Event 4',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        },
        {
            id: 5,
            name: 'Event 5',
            date: '23-08-2018',
            view: 100000,
            participant: 1510,
            joined: false
        }
    ],
    recommended: [1, 2, 3],
    popular: [1, 4, 5],
    category: [
        {
            id: 'iot',
            name: 'IOT',
            data: [1, 5, 2]
        },
        {
            id: 'cooking',
            name: 'Cooking',
            data: [2, 3, 4]
        }
    ]
};

localStorage.setItem('events', JSON.stringify(events));

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
