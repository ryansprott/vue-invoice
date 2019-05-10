<template>
  <div id="app">
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
