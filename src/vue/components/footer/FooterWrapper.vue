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
