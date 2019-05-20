import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  taxRate: 1.08875,
  rows: [
    {description: 'one',   quantity: 1, rate: 1},
    {description: 'two',   quantity: 2, rate: 2},
    {description: 'three', quantity: 3, rate: 3},
    {description: 'four',  quantity: 4, rate: 4},
    {description: 'five',  quantity: 5, rate: 5},
    {description: 'six',   quantity: 6, rate: 6},
    {description: 'seven', quantity: 7, rate: 7},
    {description: 'eight', quantity: 8, rate: 8},
    {description: 'nine',  quantity: 9, rate: 9},
  ],
  inputDescription: '',
  inputQuantity: '',
  inputRate: '',
  isValidDescription: false,
  isValidQuantity: false,
  isValidRate: false,
  textIsVisible: true
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
    getTextIsVisible: () => {
      return state.textIsVisible
    },
    getTaxRate: () => {
      return state.taxRate
    },
    getGrandTotal: () => {
      let values = (state.rows.length > 0) ? state.rows.map(row => { return row.rate * row.quantity }) : [0]
      values = values.map(v => { return parseFloat((v * state.taxRate).toFixed(2)) })
      let reduced = values.reduce((acc, val) => acc + val)
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(reduced)
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
      state.inputDescription = state.inputQuantity = state.inputRate = payload
    },
    updateValidations(state, payload) {
      state.isValidDescription = state.isValidQuantity = state.isValidRate = payload
    },
    updateTextIsVisible(state, payload) {
      state.textIsVisible = payload
    },
    deleteRow(state, payload) {
      state.rows = state.rows.filter(el => { return el != payload })
    }
  },
  actions: {
    addRow(context, payload) {
      context.commit('updateRows', {
        description: state.inputDescription,
        quantity: state.inputQuantity,
        rate: state.inputRate
      })
      context.commit('updateUserInput', '')
      context.commit('updateValidations', false)
    },
  }
});

export default store
