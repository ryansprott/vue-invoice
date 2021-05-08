<template>
  <input
    id="rate"
    @keyup="validateInput"
    :value="getInputRate"
    type="text"
    class="form-control"
    placeholder="Rate"
  />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { ValidatableElement } from "../../../utils/validation";

export default {
  computed: {
    ...mapGetters(["getInputRate"]),
  },
  methods: {
    ...mapMutations(["updateInputRate", "updateRateValid"]),
    validateInput(event) {
      let input = new ValidatableElement(event);
      if (true === input.validateRate()) {
        this.updateInputRate(parseFloat(input));
        this.updateRateValid(true);
      } else {
        this.updateRateValid(false);
      }
    },
  },
};
</script>
