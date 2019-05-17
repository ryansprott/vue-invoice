<template>
  <wrapper class="d-flex flex-column">
    <main role="main" class="flex-fill">
      <header-wrapper />
      <form-wrapper />
      <invoice-wrapper />
    </main>
    <footer-wrapper />
  </wrapper>
</template>

<script>
import HeaderWrapper from './header/HeaderWrapper.vue'
import FormWrapper from './form/FormWrapper.vue'
import InvoiceWrapper from './invoice/InvoiceWrapper.vue'
import FooterWrapper from './footer/FooterWrapper.vue'

export default {
  components: {
    'header-wrapper': HeaderWrapper,
    'form-wrapper': FormWrapper,
    'invoice-wrapper': InvoiceWrapper,
    'footer-wrapper': FooterWrapper,
  }
}
</script>
