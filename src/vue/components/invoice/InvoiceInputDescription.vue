<template>
  <input class="form-control"
    type="text"
    v-model="row.description"
    @keyup="validateInput" />
</template>

<script>
export default {
  props: ['row'],
  methods: {
    validateInput(event) {
      const MAX_LENGTH = 10
      let elem  = event.srcElement
      let input = event.target.value
      let classes = ['text-danger', 'is-invalid']
      if (input.length < 1) {
        // input is empty
        classes.map(c => { elem.classList.remove(c) })
        // this.$store.dispatch('setInvoiceValid', false)
      } else if (input.length >= 1 && input.length <= MAX_LENGTH) {
        // input is valid, update state
        classes.map(c => { elem.classList.remove(c) })
        // this.$store.dispatch('setInvoiceValid', true)
      } else if (input.length > MAX_LENGTH) {
        // input is too long
        classes.map(c => { elem.classList.add(c) })
        // this.$store.dispatch('setInvoiceValid', false)
      }
    },
  },
}
</script>
