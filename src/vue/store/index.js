import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

const state = {
  rows: [],
  grandTotal: 0
}

const store = new Vuex.Store({
  state,
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

export default store
