import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  rows: [],
  inputDescription: '',
  inputQuantity: '',
  inputRate: '',
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
    getNumRows: () => {
      return state.rows.length
    },
    getInputDescription: () => {
      return state.inputDescription
    },
    getInputQuantity: () => {
      return state.inputQuantity
    },
    getInputRate: () => {
      return state.inputRate
    },
    getFormIsValid: () => {
      return (state.isValidDescription
        && state.isValidQuantity
        && state.isValidRate)
    },
    getGrandTotal: () => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const values = (state.rows.length > 0) ? state.rows.map(row => { return row.rate * row.quantity }) : [0]
      const reduced = values.reduce(reducer)
      return reduced.toFixed(2)
    }
  },
  mutations: {
    updateRows(state, payload) {
      state.rows.push(payload);
    },
    updateInputDescription(state, payload) {
      state.inputDescription = payload
    },
    updateInputQuantity(state, payload) {
      state.inputQuantity = payload
    },
    updateInputRate(state, payload) {
      state.inputRate = payload
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
      state.inputDescription = state.inputQuantity = state.inputRate = ''
      state.isValidDescription = state.isValidQuantity = state.isValidRate = payload
    }
  },
  actions: {
    addRow(context, payload) {
      context.commit('updateRows', {
        description: state.inputDescription,
        quantity: state.inputQuantity,
        rate: state.inputRate
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
