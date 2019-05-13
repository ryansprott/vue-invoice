<template>
  <div class="container-fluid">
    <!-- <brand-image />
    <header-text /> -->
    <button @click="toggleForm"
      class="btn btn-success">
        {{ buttonText }} form
    </button>
    <form-wrapper v-show="getFormIsVisible" />
    <invoice-wrapper v-show="getNumRows > 0" />
  </div>
</template>

<script>
import BrandImage from './header/BrandImage.vue'
import HeaderText from './header/HeaderText.vue'
import InvoiceWrapper from './invoice/InvoiceWrapper.vue'
import FormWrapper from './form/FormWrapper.vue'
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getNumRows', 'getFormIsVisible']),
    buttonText: function () {
      return this.getFormIsVisible ? "Hide" : "Show"
    }
  },
  methods: {
    ...mapMutations(['updateFormIsVisible']),
    toggleForm: function () {
      this.updateFormIsVisible(!this.getFormIsVisible)
    }
  },
  components: {
    'brand-image': BrandImage,
    'header-text': HeaderText,
    'invoice-wrapper': InvoiceWrapper,
    'form-wrapper': FormWrapper
  }
}
</script>
