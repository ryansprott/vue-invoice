<template>
  <input class="form-control"
    type="text"
    v-model="row.description"
    @keyup="validateInput" />
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['row'],
  methods: {
    // this is a synchronous mutation, so it can be called directly from the component
    ...mapMutations(['updateInvoiceValid']),
    validateInput(event) {
      const MAX_LENGTH = 10
      let elem  = event.srcElement
      let input = event.target.value
      let classes = ['text-danger', 'is-invalid']
      if (input.length < 1) {
        // input is empty
        classes.map(c => { elem.classList.remove(c) })
        this.updateInvoiceValid(false)
      } else if (input.length >= 1 && input.length <= MAX_LENGTH) {
        // input is valid
        classes.map(c => { elem.classList.remove(c) })
        this.updateInvoiceValid(true)
      } else if (input.length > MAX_LENGTH) {
        // input is too long
        classes.map(c => { elem.classList.add(c) })
        this.updateInvoiceValid(false)
      }
    },
  },
}
</script>
