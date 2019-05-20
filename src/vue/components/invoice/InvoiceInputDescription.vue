<template>
  <input class="form-control"
    type="text"
    v-model="row.description"
    @keyup="validateInput" />
</template>

<script>
import { mapMutations } from 'vuex'
import { descriptionMaxLength, warningClasses } from '../../../utils/validation'

export default {
  props: ['row'],
  methods: {
    // this is a synchronous mutation, so it can be called directly from the component
    ...mapMutations(['updateInvoiceValid']),
    validateInput(event) {
      let elem  = event.srcElement
      let input = event.target.value
      if (input.length < 1) {
        // input is empty
        warningClasses.map(c => { elem.classList.remove(c) })
        this.updateInvoiceValid(false)
      } else if (input.length >= 1 && input.length <= descriptionMaxLength) {
        // input is valid
        warningClasses.map(c => { elem.classList.remove(c) })
        this.updateInvoiceValid(true)
      } else if (input.length > descriptionMaxLength) {
        // input is too long
        warningClasses.map(c => { elem.classList.add(c) })
        this.updateInvoiceValid(false)
      }
    },
  },
}
</script>
