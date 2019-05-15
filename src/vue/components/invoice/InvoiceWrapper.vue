<template>
  <div class="container bg-light table-responsive" v-show="getNumRows > 0">
    <table class="table">
      <invoice-header-row />
      <tbody v-for="(row, index) in getRows" :key="index">
        <invoice-row :row="row" />
      </tbody>
    </table>
  </div>
</template>

<script>
import InvoiceRow from './InvoiceRow.vue'
import InvoiceHeaderRow from './InvoiceHeaderRow.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'invoice-row': InvoiceRow,
    'invoice-header-row': InvoiceHeaderRow,
  },
  computed: {
    ...mapGetters(['getRows', 'getNumRows'])
  },
};
</script>
