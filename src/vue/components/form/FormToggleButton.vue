<template>
  <a href="#" @click="toggleForm" :title="buttonText">
    <i class="fas fa-bars"></i>
  </a>
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
.fa-bars {
  color: $nyc-diesel;
  width: 100%;
  height: 2.5rem;
}
</style>
