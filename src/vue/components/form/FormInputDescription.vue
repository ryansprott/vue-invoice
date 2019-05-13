<template>
  <input id="description"
    @keyup="validateInput"
    :value="getInputDescription"
    type="text"
    class="form-control"
    placeholder="Description" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getInputDescription'])
  },
  methods: {
    // these are synchronous mutations, so we can call them directly from the component
    ...mapMutations(['updateInputDescription', 'updateDescriptionValid']),
    validateInput(event) {
      const MAX_LENGTH = 10
      let elem = document.getElementById('description')
      let input = event.target.value
      let classes = ['text-danger', 'is-invalid']
      if (input.length < 1) {
        // input is empty, but we don't want to apply the warning styles
        classes.map(c => { elem.classList.remove(c) })
        this.updateDescriptionValid(false)
      } else if (input.length >= 1 && input.length <= MAX_LENGTH) {
        // input is valid, update state
        classes.map(c => { elem.classList.remove(c) })
        this.updateInputDescription(input)
        this.updateDescriptionValid(true)
      } else if (input.length > MAX_LENGTH) {
        // input is too long
        classes.map(c => { elem.classList.add(c) })
        this.updateDescriptionValid(false)
      }
    },
  },
}
</script>
