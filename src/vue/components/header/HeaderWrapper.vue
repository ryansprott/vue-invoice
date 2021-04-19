<template>
  <div>
    <div class="d-flex w-100">
      <div class="col-9">
        <!-- <brand-image /> -->
      </div>
      <div class="col-3">
        <header-toggle-button />
      </div>
    </div>
    <div class="d-flex w-100">
      <div class="col-md-12">
        <header-text v-show="getTextIsVisible" />
      </div>
    </div>
  </div>
</template>

<script>
import BrandImage from "./BrandImage.vue";
import HeaderText from "./HeaderText.vue";
import HeaderToggleButton from "./HeaderToggleButton.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "header-toggle-button": HeaderToggleButton,
    "header-text": HeaderText,
    "brand-image": BrandImage,
  },
  computed: {
    ...mapGetters(["getTextIsVisible"]),
  },
};
</script>
