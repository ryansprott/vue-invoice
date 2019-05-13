<template>
  <a href="#"
    class="btn btn-danger"
    @click="deleteThisRow">
      Delete
  </a>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['row'],
  methods: {
    ...mapMutations(['deleteRow']),
    deleteThisRow: function () {
      this.deleteRow(this.row)
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-danger {
  background-color: $grandaddy-purp;
  border-color: $grandaddy-purp;
  color: scale-color($green-crack, $lightness: -20%);
}

.btn-danger:hover {
  background-color: $grandaddy-purp;
  border-color: $grandaddy-purp;
  color: $green-crack;
}
</style>
