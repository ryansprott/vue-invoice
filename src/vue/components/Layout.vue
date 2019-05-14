<template>
  <div>
    <main role="main" class="container-fluid">
      <!-- <brand-image />
      <header-text /> -->
      <form-wrapper />
      <invoice-wrapper />
    </main>
    <footer-wrapper />
  </div>
</template>

<script>
import BrandImage from './header/BrandImage.vue'
import HeaderText from './header/HeaderText.vue'
import FormWrapper from './form/FormWrapper.vue'
import InvoiceWrapper from './invoice/InvoiceWrapper.vue'
import FooterWrapper from './footer/FooterWrapper.vue'

export default {
  components: {
    'brand-image': BrandImage,
    'header-text': HeaderText,
    'form-wrapper': FormWrapper,
    'invoice-wrapper': InvoiceWrapper,
    'footer-wrapper': FooterWrapper,
  }
}
</script>
