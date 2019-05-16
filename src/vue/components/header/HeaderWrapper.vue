<template>
<div>
  <div class="row">
    <div class="col-md-11">
      <brand-image />
    </div>
    <div class="col-md-1">
      <form-toggle-button />
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <header-text v-show="getFormIsVisible" />
    </div>

  </div>
</div>
</template>

<script>
import BrandImage from './BrandImage.vue'
import HeaderText from './HeaderText.vue'
import FormToggleButton from '../form/FormToggleButton.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'form-toggle-button': FormToggleButton,
    'header-text': HeaderText,
    'brand-image': BrandImage,
  },
  computed: {
    ...mapGetters(['getFormIsVisible'])
  },
}
</script>
