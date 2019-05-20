<template>
  <tr>
    <td>
      <invoice-input-description :row="row" />
    </td>
    <td>
      <invoice-input-quantity :row="row" />
    </td>
    <td>
      <invoice-input-rate :row="row" />
    </td>
    <td class="text-right">
      <div>{{ getSubtotal }}</div>
    </td>
    <td class="text-right">
      <div>{{ getTax }}</div>
    </td>
    <td class="text-right">
      <div>{{ getTotal }}</div>
    </td>
    <td>
      <invoice-input-button :row="row" />
    </td>
  </tr>
</template>

<script>
import InvoiceInputDescription from './InvoiceInputDescription.vue'
import InvoiceInputQuantity from './InvoiceInputQuantity.vue'
import InvoiceInputRate from './InvoiceInputRate.vue'
import InvoiceInputButton from './InvoiceInputButton.vue'
import { mapGetters } from 'vuex'
import { formatCurrency } from '../../../utils/formatCurrency.js'

export default {
  props: ['row'],
  components: {
    'invoice-input-description': InvoiceInputDescription,
    'invoice-input-quantity': InvoiceInputQuantity,
    'invoice-input-rate': InvoiceInputRate,
    'invoice-input-button': InvoiceInputButton
  },
  computed: {
    ...mapGetters(['getTaxRate']),
    getSubtotal: function () {
      let subtotal = this.row.rate * this.row.quantity
      return formatCurrency(subtotal)
    },
    getTotal: function () {
      let total = this.row.rate * this.row.quantity * this.getTaxRate
      return formatCurrency(total)
    },
    getTax: function () {
      let tax = this.row.rate * this.row.quantity * (this.getTaxRate - 1)
      return formatCurrency(tax)
    }
  },
}
</script>
