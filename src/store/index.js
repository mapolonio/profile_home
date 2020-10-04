import Vue from 'vue';
import Vuex from 'vuex';
import { UPDATE_VISITS } from './mutation-types';
import { getVisitNumber } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    visits: 0
  },
  mutations: {
    [UPDATE_VISITS](state, visits) {
      state.visits = visits;
    }
  },
  actions: {
    getVisitNumber
  }
});
