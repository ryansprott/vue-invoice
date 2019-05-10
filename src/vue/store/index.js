import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  rows: [
    {
      description: 'Fake description',
      rate: 2.5,
      quantity: 4
    },
    {
      description: 'Faker description',
      rate: 3.33,
      quantity: 2
    }
  ],
  userInput: {
    inputDescription: '',
    inputQuantity: '',
    inputRate: ''
  }
}

const store = new Vuex.Store({
  state,
  getters: {
    getRows: () => {
      return state.rows
    },
    getInputDescription: () => {
      return state.userInput.inputDescription
    },
    getInputQuantity: () => {
      return state.userInput.inputQuantity
    },
    getInputRate: () => {
      return state.userInput.inputRate
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
    updateInputDescription(state, payload) {
      state.userInput.inputDescription = payload
    },
    updateInputQuantity(state, payload) {
      state.userInput.inputQuantity = payload
    },
    updateInputRate(state, payload) {
      state.userInput.inputRate = payload
    },
  },
  actions: {
    addRow(context, payload) {
      context.commit('addRow', payload)
    },
    setInputDescription: (context, payload) => {
      context.commit('updateInputDescription', payload)
    },
    setInputQuantity: (context, payload) => {
      context.commit('updateInputQuantity', payload)
    },
    setInputRate: (context, payload) => {
      context.commit('updateInputRate', payload)
    },
  }
});

export default store
