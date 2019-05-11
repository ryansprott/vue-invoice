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
    <td>
      <a class="btn btn-danger" href="#" @click="deleteRow">Delete</a>
    </td>
    <td>
      <div>{{ getTotal }}</div>
    </td>
  </tr>
</template>

<script>
import InvoiceInputDescription from './InvoiceInputDescription.vue'
import InvoiceInputQuantity from './InvoiceInputQuantity.vue'
import InvoiceInputRate from './InvoiceInputRate.vue'

export default {
  props: ['row'],
  components: {
    'invoice-input-description': InvoiceInputDescription,
    'invoice-input-quantity': InvoiceInputQuantity,
    'invoice-input-rate': InvoiceInputRate,
  },
  computed: {
    getTotal: function () {
      return (this.row.rate * this.row.quantity).toFixed(2)
    },
  },
  methods: {
    deleteRow: function () {
      this.$store.dispatch('deleteRow', this.row)
    },
  },
}
</script>
