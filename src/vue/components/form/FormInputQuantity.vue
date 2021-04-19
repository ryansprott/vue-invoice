<template>
  <input
    id="quantity"
    @keyup="validateInput"
    :value="getInputQuantity"
    type="text"
    class="form-control"
    placeholder="Quantity"
  />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { quantityRegex, warningClasses } from "../../../utils/validation";

export default {
  computed: {
    ...mapGetters(["getInputQuantity"]),
  },
  methods: {
    // these are synchronous mutations, so we can call them directly from the component
    ...mapMutations(["updateInputQuantity", "updateQuantityValid"]),
    validateInput(event) {
      let elem = document.getElementById("quantity");
      let input = event.target.value;
      if (input.length < 1) {
        // input is empty, but we don't want to apply the warning styles
        warningClasses.map((c) => {
          elem.classList.remove(c);
        });
        this.updateQuantityValid(false);
      } else if (input.length >= 1 && quantityRegex.test(input)) {
        // input is valid, update state
        warningClasses.map((c) => {
          elem.classList.remove(c);
        });
        this.updateInputQuantity(parseInt(input));
        this.updateQuantityValid(true);
      } else {
        // input didn't match regex
        warningClasses.map((c) => {
          elem.classList.add(c);
        });
        this.updateQuantityValid(false);
      }
    },
  },
};
</script>
