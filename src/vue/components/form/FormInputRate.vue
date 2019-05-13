<template>
  <input id="rate"
    @keyup="validateInput"
    :value="getInputRate"
    type="text"
    class="form-control"
    placeholder="Rate" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
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
      let regex = new RegExp(/^\d+(\.\d{1,2})?$/)
      let classes = ['text-danger', 'is-invalid']
      if (input.length < 1) {
        // input is empty, but we don't want to apply the warning styles
        classes.map(c => { elem.classList.remove(c) })
        this.updateRateValid(false)
      } else if (input.length >= 1 && regex.test(input)) {
        // input is valid, update state
        classes.map(c => { elem.classList.remove(c) })
        this.updateInputRate(parseFloat(input))
        this.updateRateValid(true)
      } else {
        // input didn't match regex
        classes.map(c => { elem.classList.add(c) })
        this.updateRateValid(false)
      }
    },
  },
}
</script>
