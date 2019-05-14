<template>
  <footer class="footer">
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
