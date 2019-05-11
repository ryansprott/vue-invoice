<template>
  <input class="form-control"
    v-model="row.rate"
    @keyup="validateInput" />
</template>

<script>
export default {
  props: ['row'],
  methods: {
    validateInput(event) {
      let elem  = event.srcElement
      let input = event.target.value
      let regex = new RegExp(/^\d+(\.\d{1,2})?$/)
      let classes = ['text-danger', 'is-invalid']
      if (input.length < 1) {
        // input is empty, this is BAD!!!
        classes.map(c => { elem.classList.add(c) })
        // this.$store.dispatch('setInvoiceValid', false)
      } else if (input.length >= 1 && regex.test(input)) {
        // input is valid, update state
        classes.map(c => { elem.classList.remove(c) })
        // this.$store.dispatch('setInvoiceValid', true)
      } else {
        // input didn't match regex
        classes.map(c => { elem.classList.add(c) })
        // this.$store.dispatch('setInvoiceValid', false)
      }
    },
  },
}
</script>
