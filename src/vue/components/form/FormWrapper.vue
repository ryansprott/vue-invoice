<template>
  <div class="row py-3">
    <div class="col-md-5">
      <form-input-description />
    </div>
    <div class="col-md-2">
      <form-input-quantity />
    </div>
    <div class="col-md-2">
      <form-input-rate />
    </div>
    <div class="col-md-3">
      <form-input-button />
    </div>
  </div>
</template>

<script>
import FormInputDescription from './FormInputDescription.vue'
import FormInputQuantity from './FormInputQuantity.vue'
import FormInputRate from './FormInputRate.vue'
import FormInputButton from './FormInputButton.vue'

export default {
  components: {
    'form-input-description': FormInputDescription,
    'form-input-quantity': FormInputQuantity,
    'form-input-rate': FormInputRate,
    'form-input-button': FormInputButton
  },
}
</script>
