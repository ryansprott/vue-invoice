<template>
  <footer class="mt-3">
    <footer-error v-show="!getInvoiceIsValid" />
    <footer-grand-total v-show="getInvoiceIsValid" />
  </footer>
</template>

<script>
import FooterGrandTotal from './FooterGrandTotal.vue'
import FooterError from './FooterError.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'footer-grand-total': FooterGrandTotal,
    'footer-error': FooterError,
  },
  computed: {
    ...mapGetters(['getInvoiceIsValid'])
  }
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
