<template>
  <a
    href="#"
    class="btn btn-danger shadow-none"
    title="Delete this row"
    @click="deleteThisRow"
  >
    <font-awesome-icon :icon="deleteIcon" />
  </a>
</template>

<script>
import { mapMutations } from "vuex";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default {
  props: ["row"],
  computed: {
    deleteIcon: function () {
      return faTrashAlt;
    },
  },
  methods: {
    ...mapMutations(["deleteRow"]),
    deleteThisRow: function () {
      this.deleteRow(this.row);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-danger {
  background-color: $grandaddy-purp;
  border-color: $grandaddy-purp;
  color: $green-crack-lite;
  &:hover {
    background-color: $grandaddy-purp;
    border-color: $grandaddy-purp;
    color: $green-crack;
  }
}
</style>
