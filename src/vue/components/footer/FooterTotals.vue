<template>
  <div class="container-fluid d-flex w-100">
    <div class="py-3 col-md-4 text-center">
      Subtotal: {{ getSubtotal }}
    </div>
    <div class="py-3 col-md-4 text-center">
      Tax: {{ getTotalTax }}
    </div>
    <div class="py-3 col-md-4 text-center">
      Grand Total: {{ getGrandTotal }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    getSubtotal: function () {
      let subtotal = this.$store.getters.getSubtotal
      return this.formatCurrency(subtotal)
    },
    getTotalTax: function () {
      let tax = this.$store.getters.getTotalTax
      return this.formatCurrency(tax)
    },
    getGrandTotal: function () {
      let grandTotal = this.$store.getters.getSubtotal + this.$store.getters.getTotalTax
      return this.formatCurrency(grandTotal)
    }
  },
  methods: {
    formatCurrency: (num) => {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  min-height: 3rem;
  background-color: $nyc-diesel;
  font-family: "Noto Sans"
}
</style>
