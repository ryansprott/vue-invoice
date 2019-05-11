<template>
  <button class="btn btn-primary add-row"
    :disabled="!getFormIsValid"
    @click="addRow">
      Add
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

<style lang="scss" scoped>
.btn-primary {
  background-color: $la-confidential;
  border-color: $blue-dream;
  color: $white-widow;
  width: 100%;
}
</style>
