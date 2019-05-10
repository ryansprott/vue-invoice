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
      if (input.length === 0 || regex.test(input)) {
        classes.map(c => { elem.classList.remove(c) })
        this.$store.dispatch('setInputRate', input)
      } else {
        classes.map(c => { elem.classList.add(c) })
      }
    },
  },
}
</script>
