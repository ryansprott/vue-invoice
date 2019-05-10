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
    inputRate: '',
  },
  isValidDescription: false,
  isValidQuantity: false,
  isValidRate: false
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
    getFormIsValid: () => {
      return (state.isValidDescription
        && state.isValidQuantity
        && state.isValidRate)
    },
    getGrandTotal: () => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const values = state.rows.map(row => { return row.rate * row.quantity })
      const reduced = values.reduce(reducer)
      return reduced.toFixed(2)
    }
  },
  mutations: {
    updateRows(state, payload) {
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
    updateDescriptionValid(state, payload) {
      state.isValidDescription = payload
    },
    updateQuantityValid(state, payload) {
      state.isValidQuantity = payload
    },
    updateRateValid(state, payload) {
      state.isValidRate = payload
    },
    updateUserInput(state, payload) {
      state.userInput = {
        inputDescription: '',
        inputQuantity: '',
        inputRate: '',
      }
      state.isValidDescription = state.isValidQuantity = state.isValidRate = payload
    }
  },
  actions: {
    addRow(context, payload) {
      context.commit('updateRows', {
        description: state.userInput.inputDescription,
        quantity: state.userInput.inputQuantity,
        rate: state.userInput.inputRate
      })
      context.commit('updateUserInput', false)
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
    setDescriptionValid: (context, payload) => {
      context.commit('updateDescriptionValid', payload)
    },
    setQuantityValid: (context, payload) => {
      context.commit('updateQuantityValid', payload)
    },
    setRateValid: (context, payload) => {
      context.commit('updateRateValid', payload)
    },
  }
});

export default store
