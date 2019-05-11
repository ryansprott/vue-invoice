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
    <td class="text-right">
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

<style lang="scss" scoped>
.btn-danger {
  background-color: $grandaddy-purp;
  border-color: $grandaddy-purp;
  color: scale-color($green-crack, $lightness: -20%);
}

.btn-danger:hover {
  background-color: $grandaddy-purp;
  border-color: $grandaddy-purp;
  color: $green-crack;
}
</style>
