import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);


export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    loggedIn: false,
    auth: null,
  },
  mutations: {
    login(state){
      state.loggedIn = true;
    },
    logout(state){
      state.loggedIn = false;
    },


  },

});
