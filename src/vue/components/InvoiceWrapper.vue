<template>
  <div class="table-responsive">
    <table class="table">
      <invoice-header-row></invoice-header-row>
      <tbody v-for="(row, index) in getRows" :key="index">
        <invoice-row :row="row" ></invoice-row>
      </tbody>
      <invoice-total-row></invoice-total-row>
      <!-- <button class="add-row" @click="addRow">
        Add item
      </button> -->
    </table>
  </div>
</template>

<script>
import InvoiceRow from './InvoiceRow.vue'
import InvoiceHeaderRow from './InvoiceHeaderRow.vue'
import InvoiceTotalRow from './InvoiceTotalRow.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    'invoice-row': InvoiceRow,
    'invoice-header-row': InvoiceHeaderRow,
    'invoice-total-row': InvoiceTotalRow
  },
  computed: {
    ...mapGetters(['getRows'])
  },
  methods: {
    ...mapActions(['addRow']),
  },
};
</script>
