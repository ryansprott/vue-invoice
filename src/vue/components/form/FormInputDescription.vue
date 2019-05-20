<template>
  <input id="description"
    @keyup="validateInput"
    :value="getInputDescription"
    type="text"
    class="form-control"
    placeholder="Description" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { descriptionMaxLength, warningClasses } from '../../../utils/validation'

export default {
  computed: {
    ...mapGetters(['getInputDescription'])
  },
  methods: {
    // these are synchronous mutations, so we can call them directly from the component
    ...mapMutations(['updateInputDescription', 'updateDescriptionValid']),
    validateInput(event) {
      let elem = document.getElementById('description')
      let input = event.target.value
      if (input.length < 1) {
        // input is empty, but we don't want to apply the warning styles
        warningClasses.map(c => { elem.classList.remove(c) })
        this.updateDescriptionValid(false)
      } else if (input.length >= 1 && input.length <= descriptionMaxLength) {
        // input is valid, update state
        warningClasses.map(c => { elem.classList.remove(c) })
        this.updateInputDescription(input)
        this.updateDescriptionValid(true)
      } else if (input.length > descriptionMaxLength) {
        // input is too long
        warningClasses.map(c => { elem.classList.add(c) })
        this.updateDescriptionValid(false)
      }
    },
  },
}
</script>
