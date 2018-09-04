// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iview from 'iview';
import axios from 'axios';
import qs from 'qs';
import store from './store';
import 'iview/dist/styles/iview.css';
import './assets/css/common.css';
import './assets/icon/iconfont.css';
Vue.use(iview);
Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
