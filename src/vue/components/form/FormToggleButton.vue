<template>
  <div class="p-2">
    <a href="#" @click="toggleForm" :title="buttonText">
      <i class="fas fa-caret-up"></i>
    </a>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getFormIsVisible']),
    buttonText: function () {
      return this.getFormIsVisible ? "Hide form" : "Show form"
    },
  },
  methods: {
    ...mapMutations(['updateFormIsVisible']),
    toggleForm: function () {
      this.updateFormIsVisible(!this.getFormIsVisible)
    },
  },
}
</script>

<style lang="scss" scoped>
.fa-caret-up, .fa-caret-down {
  color: $nyc-diesel;
  width: 100%;
  height: 2.5rem;
}
</style>
