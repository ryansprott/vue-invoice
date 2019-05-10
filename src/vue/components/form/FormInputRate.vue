<template>
  <input id="rate"
    @keyup="validateInput"
    type="text"
    class="form-control"
    placeholder="Rate" />
</template>

<script>
export default {
  methods: {
    validateInput(event) {
      let elem = document.getElementById('rate')
      let input = event.target.value
      let regex = new RegExp(/^\d+(\.\d{1,2})?$/)
      let classes = ['text-danger', 'is-invalid']
      if (input.length < 1) {
        // input is empty, but we don't want to apply the warning styles
        classes.map(c => { elem.classList.remove(c) })
        this.$store.dispatch('setRateValid', false)
      } else if (input.length >= 1 && regex.test(input)) {
        // input is valid, update state
        classes.map(c => { elem.classList.remove(c) })
        this.$store.dispatch('setInputRate', parseFloat(input))
        this.$store.dispatch('setRateValid', true)
      } else {
        // input didn't match regex
        classes.map(c => { elem.classList.add(c) })
        this.$store.dispatch('setRateValid', false)
      }
    },
  },
}
</script>
