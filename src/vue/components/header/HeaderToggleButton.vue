<template>
  <div class="p-2 text-right">
    <a href="#" @click="toggleForm" :title="buttonText">
      <font-awesome-icon :icon="toggleIcon" />
    </a>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default {
  computed: {
    ...mapGetters(["getTextIsVisible"]),
    buttonText: function () {
      return this.getTextIsVisible ? "Hide form" : "Show form";
    },
    toggleIcon: function () {
      return this.getTextIsVisible ? faCaretUp : faCaretDown;
    },
  },
  methods: {
    ...mapMutations(["updateTextIsVisible"]),
    toggleForm: function () {
      this.updateTextIsVisible(!this.getTextIsVisible);
    },
  },
};
</script>

<style lang="scss" scoped>
.fa-caret-up,
.fa-caret-down {
  color: $nyc-diesel;
  width: 3rem;
  height: 3rem;
}
</style>
