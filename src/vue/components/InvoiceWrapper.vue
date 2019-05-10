<template>
  <div id="app">
    <div class="row" v-for="(row, index) in rows" :key="index">
      <div class="form-element">
        <label>
          desc <input v-model="row.description">
        </label>
      </div>
      <div class="form-element">
        <label>
          quant <input v-model="row.quantity">
        </label>
      </div>
      <div class="form-element">
        <label>
          rate <input v-model="row.rate">
        </label>
      </div>
      <div class="form-element">
        <label>
          total <input v-model="row.total">
        </label>
      </div>
    </div>
    <button class="add-row" @click="addRow">
      Add item
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapMultiRowFields } from 'vuex-map-fields';

export default {
  computed: {
    ...mapMultiRowFields(['rows'])
  },
  methods: {
    ...mapMutations(['addRow']),
  },
};
</script>
