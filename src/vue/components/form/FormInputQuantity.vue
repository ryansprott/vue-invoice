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
      if (input.length === 0 || regex.test(input)) {
        classes.map(c => { elem.classList.remove(c) })
        this.$store.dispatch('setInputQuantity', parseInt(input))
      } else {
        classes.map(c => { elem.classList.add(c) })
      }
    },
  },
}
</script>
