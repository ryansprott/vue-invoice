<template>
  <div>
    <!-- <brand-image></brand-image> -->
    <!-- <header-text></header-text> -->
    <form-wrapper></form-wrapper>
    <invoice-wrapper></invoice-wrapper>
  </div>
</template>

<script>
import BrandImage from './BrandImage.vue'
import HeaderText from './HeaderText.vue'
import InvoiceWrapper from './InvoiceWrapper.vue'
import FormWrapper from './FormWrapper.vue'

export default {
  components: {
    'brand-image': BrandImage,
    'header-text': HeaderText,
    'invoice-wrapper': InvoiceWrapper,
    'form-wrapper': FormWrapper
  }
}
</script>
