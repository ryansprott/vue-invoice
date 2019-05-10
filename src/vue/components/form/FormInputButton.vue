<template>
  <button class="btn btn-primary add-row"
    :disabled="!getFormIsValid"
    @click="addRow">
      Add item
  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getFormIsValid'])
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
