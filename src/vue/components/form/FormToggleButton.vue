<template>
  <button @click="toggleForm"
    class="btn btn-success">
      {{ buttonText }}
  </button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getFormIsVisible']),
    buttonText: function () {
      return this.getFormIsVisible ? "Hide" : "Show"
    },
  },
  methods: {
    ...mapMutations(['updateFormIsVisible']),
    toggleForm: function () {
      this.updateFormIsVisible(!this.getFormIsVisible)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-success, .btn-success:hover {
  background-color: $nyc-diesel;
  border-color: $nyc-diesel;
  color: $white-widow;
  width: 100%;
}
</style>
