<template>
  <footer class="mt-3">
    <footer-totals v-if="getInvoiceIsValid" />
    <footer-error v-if="!getInvoiceIsValid" />
  </footer>
</template>

<script>
import FooterTotals from './FooterTotals.vue'
import FooterError from './FooterError.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'footer-totals': FooterTotals,
    'footer-error': FooterError,
  },
  computed: {
    ...mapGetters(['getInvoiceIsValid'])
  },
}
</script>
