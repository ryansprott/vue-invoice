<template>
  <input id="description"
    @keyup="validateInput"
    type="text"
    class="form-control"
    placeholder="Description" />
</template>

<script>
export default {
  methods: {
    validateInput(event) {
      let elem = document.getElementById('description')
      let input = event.target.value
      let classes = ['text-danger', 'is-invalid']
      if (input.length <= 10) {
        classes.map(c => { elem.classList.remove(c) })
        this.$store.dispatch('setInputDescription', input)
      } else if (input.length > 10) {
        classes.map(c => { elem.classList.add(c) })
      }
    },
  },
}
</script>
