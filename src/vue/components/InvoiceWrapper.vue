<template>
  <div id="app">
    <div v-for="(row, index) in rows" :key="index">
      <invoice-row :row="row" ></invoice-row>
    </div>
    <button class="add-row" @click="addRow">
      Add item
    </button>
  </div>
</template>

<script>
import InvoiceRow from './InvoiceRow.vue'
import { mapMutations } from 'vuex';
import { mapMultiRowFields } from 'vuex-map-fields';

export default {
  components: {
    'invoice-row': InvoiceRow
  },
  computed: {
    ...mapMultiRowFields(['rows'])
  },
  methods: {
    ...mapMutations(['addRow']),
  },
};
</script>
