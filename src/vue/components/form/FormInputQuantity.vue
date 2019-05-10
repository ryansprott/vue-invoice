<template>
  <input id="quantity"
    @keyup="validateInput"
    type="text"
    class="form-control"
    placeholder="Quantity" />
</template>

<script>
export default {
  methods: {
    validateInput(event) {
      let elem = document.getElementById('quantity')
      let input = event.target.value
      let regex = new RegExp(/^[1-9]\d*$/)
      let classes = ['text-danger', 'is-invalid']
      if (input.length < 1) {
        // input is empty, but we don't want to apply the warning styles
        classes.map(c => { elem.classList.remove(c) })
        this.$store.dispatch('setQuantityValid', false)
      } else if (input.length >= 1 && regex.test(input)) {
        // input is valid, update state
        classes.map(c => { elem.classList.remove(c) })
        this.$store.dispatch('setInputQuantity', parseInt(input))
        this.$store.dispatch('setQuantityValid', true)
      } else {
        // input didn't match regex
        classes.map(c => { elem.classList.add(c) })
        this.$store.dispatch('setQuantityValid', false)
      }
    },
  },
}
</script>
