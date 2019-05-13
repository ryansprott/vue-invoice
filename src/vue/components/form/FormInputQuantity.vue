<template>
  <input id="quantity"
    @keyup="validateInput"
    :value="getInputQuantity"
    type="text"
    class="form-control"
    placeholder="Quantity" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getInputQuantity'])
  },
  methods: {
    // these are synchronous mutations, so we can call them directly from the component
    ...mapMutations(['updateInputQuantity', 'updateQuantityValid']),
    validateInput(event) {
      let elem = document.getElementById('quantity')
      let input = event.target.value
      let regex = new RegExp(/^[1-9]\d*$/)
      let classes = ['text-danger', 'is-invalid']
      if (input.length < 1) {
        // input is empty, but we don't want to apply the warning styles
        classes.map(c => { elem.classList.remove(c) })
        this.updateQuantityValid(false)
      } else if (input.length >= 1 && regex.test(input)) {
        // input is valid, update state
        classes.map(c => { elem.classList.remove(c) })
        this.updateInputQuantity(parseInt(input))
        this.updateQuantityValid(true)
      } else {
        // input didn't match regex
        classes.map(c => { elem.classList.add(c) })
        this.updateQuantityValid(false)
      }
    },
  },
}
</script>
