<template>
  <input class="form-control" v-model="row.rate" @keyup="validateInput" />
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
      this.updateInvoiceValid(input.rateValid());
    },
  },
};
</script>
