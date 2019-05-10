<template>
  <div>
    <!-- <brand-image></brand-image> -->
    <!-- <header-text></header-text> -->
    <form-wrapper></form-wrapper>
    <invoice-wrapper></invoice-wrapper>
  </div>
</template>

<script>
import BrandImage from './header/BrandImage.vue'
import HeaderText from './header/HeaderText.vue'
import InvoiceWrapper from './invoice/InvoiceWrapper.vue'
import FormWrapper from './form/FormWrapper.vue'

export default {
  components: {
    'brand-image': BrandImage,
    'header-text': HeaderText,
    'invoice-wrapper': InvoiceWrapper,
    'form-wrapper': FormWrapper
  }
}
</script>
