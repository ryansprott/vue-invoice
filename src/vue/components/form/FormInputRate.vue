<template>
  <input id="rate"
    @keyup="validateInput"
    :value="getInputRate"
    type="text"
    class="form-control"
    placeholder="Rate" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { rateRegex, warningClasses } from '../../../utils/validation'

export default {
  computed: {
    ...mapGetters(['getInputRate'])
  },
  methods: {
    // these are synchronous mutations, so we can call them directly from the component
    ...mapMutations(['updateInputRate', 'updateRateValid']),
    validateInput(event) {
      let elem = document.getElementById('rate')
      let input = event.target.value
      if (input.length < 1) {
        // input is empty, but we don't want to apply the warning styles
        warningClasses.map(c => { elem.classList.remove(c) })
        this.updateRateValid(false)
      } else if (input.length >= 1 && rateRegex.test(input)) {
        // input is valid, update state
        warningClasses.map(c => { elem.classList.remove(c) })
        this.updateInputRate(parseFloat(input))
        this.updateRateValid(true)
      } else {
        // input didn't match regex
        warningClasses.map(c => { elem.classList.add(c) })
        this.updateRateValid(false)
      }
    },
  },
}
</script>
