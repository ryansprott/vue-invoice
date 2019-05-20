<template>
  <input class="form-control"
    v-model="row.quantity"
    @keyup="validateInput"/>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['row'],
  methods: {
    // this is a synchronous mutation, so it can be called directly from the component
    ...mapMutations(['updateInvoiceValid']),
    validateInput(event) {
      let elem  = event.srcElement
      let input = event.target.value
      let regex = new RegExp(/^[1-9]\d*$/)
      let classes = ['text-danger', 'is-invalid']
      if (input.length < 1) {
        // input is empty
        classes.map(c => { elem.classList.add(c) })
        this.updateInvoiceValid(false)
      } else if (input.length >= 1 && regex.test(input)) {
        // input is valid
        classes.map(c => { elem.classList.remove(c) })
        this.updateInvoiceValid(true)
      } else {
        // input didn't match regex
        classes.map(c => { elem.classList.add(c) })
        this.updateInvoiceValid(false)
      }
    },
  },
}
</script>
