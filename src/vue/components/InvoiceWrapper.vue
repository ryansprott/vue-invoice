<template>
  <div>
    <div class="row">
      <div class="col-md-3">Description</div>
      <div class="col-md-3">Quantity</div>
      <div class="col-md-3">Rate</div>
      <div class="col-md-3">Total</div>
    </div>
    <div v-for="(row, index) in getRows" :key="index">
      <invoice-row :row="row" ></invoice-row>
    </div>
    <button class="add-row" @click="addRow">
      Add item
    </button>
    <div>{{ getGrandTotal }}</div>
  </div>
</template>

<script>
import InvoiceRow from './InvoiceRow.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    'invoice-row': InvoiceRow
  },
  computed: {
    ...mapGetters(['getRows', 'getGrandTotal'])
  },
  methods: {
    ...mapActions(['addRow']),
  },
};
</script>
