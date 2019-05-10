<template>
  <div class="row p-3">
    <div class="col-md-6 form-group">
      <input id="description" type="text" class="form-control" placeholder="Description">
    </div>
    <div class="col-md-2 form-group">
      <input id="rate" type="text" class="form-control" placeholder="Quantity">
    </div>
    <div class="col-md-2 form-group">
      <input id="quantity" type="text" class="form-control" placeholder="Rate">
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
export default {
  methods: {
    ...mapActions(['addRow']),
  },
}
</script>

<style lang="scss">
.btn-primary {
  background-color: $blue-dream;
  border-color: $blue-dream;
  color: $white-widow;
}
</style>
