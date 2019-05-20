<template>
  <footer class="mt-3">
    <div class="container-fluid">
      <div class="text-right">
        Grand Total: {{ getGrandTotal }}
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getGrandTotal'])
  },
}
</script>

<style lang="scss" scoped>
footer {
  height: 3rem;
  line-height: 3rem;
  background-color: $nyc-diesel;
  font-family: "Noto Sans"
}
</style>
