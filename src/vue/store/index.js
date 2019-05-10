import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  rows: [{
    description: 'Fake description',
    rate: 2.5,
    quantity: 4
  },
  {
    description: 'Faker description',
    rate: 3.33,
    quantity: 2
  }]
}

const store = new Vuex.Store({
  state,
  getters: {
    getRows: () => {
      return state.rows
    },
    getGrandTotal: () => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const values = state.rows.map(row => { return row.rate * row.quantity })
      const reduced = values.reduce(reducer)
      return reduced.toFixed(2)
    }
  },
  mutations: {
    addRow(state, payload) {
      state.rows.push(payload);
    },
  },
  actions: {
    addRow(context, payload) {
      context.commit('addRow', payload)
    }
  }
});

export default store
