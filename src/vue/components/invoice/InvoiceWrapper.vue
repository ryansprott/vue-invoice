<template>
  <div class="table-responsive" v-show="getNumRows > 0">
    <table class="table">
      <invoice-header-row />
      <tbody v-for="(row, index) in getRows" :key="index">
        <invoice-row :row="row" />
      </tbody>
      <invoice-total-row />
    </table>
  </div>
</template>

<script>
import InvoiceRow from './InvoiceRow.vue'
import InvoiceHeaderRow from './InvoiceHeaderRow.vue'
import InvoiceTotalRow from './InvoiceTotalRow.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'invoice-row': InvoiceRow,
    'invoice-header-row': InvoiceHeaderRow,
    'invoice-total-row': InvoiceTotalRow
  },
  computed: {
    ...mapGetters(['getRows', 'getNumRows'])
  },
};
</script>
