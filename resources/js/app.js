/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';

// Vue Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Create vue router instance
import { routes } from './routes';
const router = new VueRouter({
    routes,
    mode: 'history',
})

// vform
import Form from 'vform'
window.Form = Form

import { Button, HasError, AlertError } from 'vform/src/components/bootstrap5'
Vue.component(Button.name, Button)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// vue-snotify
import Snotify, { SnotifyPosition } from 'vue-snotify'
const snotifyOptions = {
    toast: {
        position: SnotifyPosition.rightTop
    }
}
Vue.use(Snotify, snotifyOptions)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('app-component', require('./components/layouts/backend/AppComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
});
