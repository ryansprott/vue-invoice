<template>
  <div class="row">
      <div class="form-element col-md-3">
        <input v-model="row.description">
      </div>
      <div class="form-element col-md-3">
        <input v-model="row.quantity">
      </div>
      <div class="form-element col-md-3">
        <input v-model="row.rate">
      </div>
      <div class="form-element col-md-3">
        <div>{{ getTotal }}</div>
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
