<template>
  <div class="row p-3">
    <div class="col-md-6 form-group">
      <form-input-description></form-input-description>
    </div>
    <div class="col-md-2 form-group">
      <form-input-quantity></form-input-quantity>
    </div>
    <div class="col-md-2 form-group">
      <form-input-rate></form-input-rate>
    </div>
    <div class="col-md-2 form-group">
      <button class="btn btn-primary add-row" @click="addRow">
        Add item
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FormInputDescription from './FormInputDescription.vue'
import FormInputQuantity from './FormInputQuantity.vue'
import FormInputRate from './FormInputRate.vue'

export default {
  components: {
    'form-input-description': FormInputDescription,
    'form-input-quantity': FormInputQuantity,
    'form-input-rate': FormInputRate,
  },
  methods: {
    ...mapActions(['addRow']),
  }
}
</script>

<style lang="scss">
.btn-primary {
  background-color: $blue-dream;
  border-color: $blue-dream;
  color: $white-widow;
}
</style>
