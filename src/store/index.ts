/* eslint-disable */
import { User } from '@/utils/models';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    user: {},
    validated: false
  },
  getters: {
    valid: (state: any): boolean => {
      return state.validated;
    },
    user: (state: any): User => {
      return state.user;
    }
  },
  mutations: {
    validate(state: any, user: User) {
      state.validated = true;
      state.user = user;
    },
    logout(state: any) {
      state.validated = false;
      state.user = undefined;
    }
  }
});

export default store;
