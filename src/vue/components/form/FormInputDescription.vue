<template>
  <input
    id="description"
    @keyup="validateInput"
    :value="getInputDescription"
    type="text"
    class="form-control"
    placeholder="Description"
  />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { ValidatableElement } from "../../../utils/validation";

export default {
  computed: {
    ...mapGetters(["getInputDescription"]),
  },
  methods: {
    ...mapMutations(["updateInputDescription", "updateDescriptionValid"]),
    validateInput(event) {
      let input = new ValidatableElement(event);
      if (true === input.validateDescription()) {
        this.updateInputDescription(event.target.value);
        this.updateDescriptionValid(true);
      } else {
        this.updateDescriptionValid(false);
      }
    },
  },
};
</script>
