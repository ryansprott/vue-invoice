<template>
  <button
    class="btn btn-primary"
    title="Add row"
    :disabled="!getFormIsValid"
    @click="addRow"
  >
    <font-awesome-icon :icon="addIcon" />
    {{ buttonText }}
  </button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { faPlus, faBan } from "@fortawesome/free-solid-svg-icons";

export default {
  computed: {
    ...mapGetters(["getFormIsValid"]),
    addIcon: function () {
      return this.getFormIsValid ? faPlus : faBan;
    },
    buttonText: function () {
      return this.getFormIsValid ? "Add row" : "Waiting for input";
    },
  },
  methods: {
    ...mapActions(["addRow"]),
  },
};
</script>

<style lang="scss" scoped>
.btn-primary {
  background-color: $blue;
  border-color: $blue;
  color: $white;
  width: 100%;
  &:disabled {
    background-color: $blue-lite;
    border-color: $blue-lite;
  }
}
</style>
