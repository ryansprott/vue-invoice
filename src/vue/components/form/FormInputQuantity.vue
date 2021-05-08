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
import { ValidatableElement } from "../../../utils/validation";

export default {
  computed: {
    ...mapGetters(["getInputQuantity"]),
  },
  methods: {
    ...mapMutations(["updateInputQuantity", "updateQuantityValid"]),
    validateInput(event) {
      let input = new ValidatableElement(event);
      if (true === input.validateQuantity()) {
        this.updateInputQuantity(parseInt(input));
        this.updateQuantityValid(true);
      } else {
        this.updateQuantityValid(false);
      }
    },
  },
};
</script>
