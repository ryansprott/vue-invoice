<template>
  <input
    class="form-control"
    type="text"
    v-model="row.description"
    @keyup="validateInput"
  />
</template>

<script>
import { mapMutations } from "vuex";
import { ValidatableElement } from "../../../utils/validation";

export default {
  props: ["row"],
  methods: {
    ...mapMutations(["updateInvoiceValid"]),
    validateInput(event) {
      let input = new ValidatableElement(event);
      this.updateInvoiceValid(input.validateDescription());
    },
  },
};
</script>
