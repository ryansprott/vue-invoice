<template>
  <div class="row">
      <div class="form-element col-md-3">
        <label>
          desc <input v-model="row.description">
        </label>
      </div>
      <div class="form-element col-md-3">
        <label>
          quant <input v-model="row.quantity">
        </label>
      </div>
      <div class="form-element col-md-3">
        <label>
          rate <input v-model="row.rate">
        </label>
      </div>
      <div class="form-element col-md-3">
        <label>
          total <input :value="getTotal">
        </label>
      </div>
  </div>
</template>

<script>
export default {
  props: ['row'],
  computed: {
    getTotal: function () {
      return (this.row.rate * this.row.quantity).toFixed(2)
    }
  }
}
</script>
