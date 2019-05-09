import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'hello world...'
  },
  template: '<div id="app">{{hello}}</div>'
})

export { app }
