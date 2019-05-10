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
          total <input v-model="row.total">
        </label>
      </div>
  </div>
</template>

<script>
export default {
  props: ['row'],
}
</script>
