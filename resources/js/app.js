/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import Index from "./Index";
import VueRouter from "vue-router";
import router from "./routes";

window.Vue = require('vue');

// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );
// Vue.component(
//     "example-2",
//     require("./components/Example2.vue").default
// );
Vue.use(VueRouter);
Vue.component()
const app = new Vue({
    el: '#app',
    router,
    components: {
        index: Index
    },
});
