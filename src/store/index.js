import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    show: false,
    count: 1,
    isLogin: false
  },
  mutations: {
    inscreas (state) {
      state.count++;
    },
    storeUser (state, user) {
      state.user = user;
    },
    storeIsLogin (state, isLogin) {
      state.isLogin = isLogin;
    }
  }
});
