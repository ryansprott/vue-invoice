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

export default {
  props: ['row'],
  components: {
    'invoice-input-description': InvoiceInputDescription,
    'invoice-input-quantity': InvoiceInputQuantity,
    'invoice-input-rate': InvoiceInputRate,
    'invoice-input-button': InvoiceInputButton
  },
  computed: {
    getTotal: function () {
      return (this.row.rate * this.row.quantity).toFixed(2)
    },
  },
}
</script>
