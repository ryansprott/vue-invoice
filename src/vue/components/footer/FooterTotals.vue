<template>
  <div class="container-fluid d-flex w-100">
    <div class="py-3 col-md-4 text-center">Subtotal: {{ getSubtotal }}</div>
    <div class="py-3 col-md-4 text-center">Tax: {{ getTotalTax }}</div>
    <div class="py-3 col-md-4 text-center">Total: {{ getGrandTotal }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { formatCurrency } from "../../../utils/formatCurrency";

export default {
  computed: {
    getSubtotal: function () {
      let subtotal = this.$store.getters.getSubtotal;
      return formatCurrency(subtotal);
    },
    getTotalTax: function () {
      let tax = this.$store.getters.getTotalTax;
      return formatCurrency(tax);
    },
    getGrandTotal: function () {
      let grandTotal =
        this.$store.getters.getSubtotal + this.$store.getters.getTotalTax;
      return formatCurrency(grandTotal);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  min-height: 3rem;
  background-color: $nyc-diesel;
  font-family: "Noto Sans";
}
</style>
