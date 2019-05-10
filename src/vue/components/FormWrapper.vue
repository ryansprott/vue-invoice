<template>
  <div class="row p-3">
    <div class="col-md-6">
      <input id="description" type="text" class="form-control" placeholder="Description">
    </div>
    <div class="col-md-2">
      <input id="rate" type="text" class="form-control" placeholder="Quantity">
    </div>
    <div class="col-md-2">
      <input id="quantity" type="text" class="form-control" placeholder="Rate">
    </div>
    <div class="col-md-2">
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
