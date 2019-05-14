<template>
  <div class="row p-3">
    <div class="col-md-1">
      <form-toggle-button />
    </div>
    <div class="col-md-4">
      <form-input-description v-show="getFormIsVisible" />
    </div>
    <div class="col-md-2">
      <form-input-quantity v-show="getFormIsVisible" />
    </div>
    <div class="col-md-2">
      <form-input-rate v-show="getFormIsVisible" />
    </div>
    <div class="col-md-3">
      <form-input-button v-show="getFormIsVisible" />
    </div>
  </div>
</template>

<script>
import FormInputDescription from './FormInputDescription.vue'
import FormInputQuantity from './FormInputQuantity.vue'
import FormInputRate from './FormInputRate.vue'
import FormInputButton from './FormInputButton.vue'
import FormToggleButton from './FormToggleButton.vue'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getFormIsVisible'])
  },
  components: {
    'form-toggle-button': FormToggleButton,
    'form-input-description': FormInputDescription,
    'form-input-quantity': FormInputQuantity,
    'form-input-rate': FormInputRate,
    'form-input-button': FormInputButton
  },
}
</script>
