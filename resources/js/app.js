require('./bootstrap');
import Vue from 'vue/dist/vue' 
import App from './app.vue';
import { sync } from 'vuex-router-sync'
import router from './src/router/index.js'
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax'; //   Vuesax styles
import './src/css/style.css'
import store from './src/store/index.js'
import 'boxicons/dist/boxicons'

window.Vue = Vue;
Vue.use(Vuesax)
// Vue.use(Vuesax, {
//   primary: '#037367',
//   secondary: '#00281f',
//   accent: '#4a7eb3',
//   error: '#FF5252',
//   info: '#2196F3',
//   success: '#4CAF50',
//   warning: '#FFC107'
// });

Vue.component('app', require('./app.vue').default);
 
sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
