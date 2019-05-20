import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  taxRate: 1.08875,
  rows: [
    { description: 'weed',   quantity: 16, rate: 24.11 },
  ],
  inputDescription: '',
  inputQuantity: '',
  inputRate: '',
  isValidDescription: false,
  isValidQuantity: false,
  isValidRate: false,
  isValidInvoice: true,
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
    getInvoiceIsValid: () => {
      return state.isValidInvoice
    },
    getTextIsVisible: () => {
      return state.textIsVisible
    },
    getTaxRate: () => {
      return state.taxRate
    },
    getRowTotals: () => {
      return (state.rows.length > 0) ? state.rows.map(row => { return row.rate * row.quantity }) : [0]
    },
    getSubtotal: (state, getters) => {
      let values = getters.getRowTotals
      values = values.map(v => { return parseFloat(v.toFixed(2)) })
      return values.reduce((acc, val) => acc + val)
    },
    getTotalTax: (state, getters) => {
      let values = getters.getRowTotals
      values = values.map(v => { return parseFloat((v * (state.taxRate - 1)).toFixed(2)) })
      return values.reduce((acc, val) => acc + val)
    },
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
    updateInvoiceValid(state, payload) {
      state.isValidInvoice = payload
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
