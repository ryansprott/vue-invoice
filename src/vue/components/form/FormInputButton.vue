<template>
  <button class="btn btn-primary mt-1"
    :disabled="!getFormIsValid"
    @click="addRow">
      <font-awesome-icon :icon="addIcon" />
  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    ...mapGetters(['getFormIsValid']),
    addIcon: function () {
      return faPlus
    },
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
