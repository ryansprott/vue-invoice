<template>
  <div class="container-fluid">
    <div class="py-3 text-center">
      <font-awesome-icon :icon="errorIcon" />
      Invoice has errors
    </div>
  </div>
</template>

<script>
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export default {
  computed: {
    errorIcon: function () {
      return faExclamationCircle;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  min-height: 3rem;
  background-color: $purple;
  color: $green;
}
</style>
