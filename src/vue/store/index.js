import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rows: [],
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    addRow(state) {
      state.rows.push({
        description: '',
        quantity: '',
        rate: '',
        total: '',
      });
    },
  },
});
