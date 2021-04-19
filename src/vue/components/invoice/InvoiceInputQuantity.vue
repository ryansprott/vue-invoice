<template>
  <input class="form-control" v-model="row.quantity" @keyup="validateInput" />
</template>

<script>
import { mapMutations } from "vuex";
import { quantityRegex, warningClasses } from "../../../utils/validation";

export default {
  props: ["row"],
  methods: {
    // this is a synchronous mutation, so it can be called directly from the component
    ...mapMutations(["updateInvoiceValid"]),
    validateInput(event) {
      let elem = event.srcElement;
      let input = event.target.value;
      if (input.length < 1) {
        // input is empty
        warningClasses.map((c) => {
          elem.classList.add(c);
        });
        this.updateInvoiceValid(false);
      } else if (input.length >= 1 && quantityRegex.test(input)) {
        // input is valid
        warningClasses.map((c) => {
          elem.classList.remove(c);
        });
        this.updateInvoiceValid(true);
      } else {
        // input didn't match regex
        warningClasses.map((c) => {
          elem.classList.add(c);
        });
        this.updateInvoiceValid(false);
      }
    },
  },
};
</script>
