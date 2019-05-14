<template>
  <a href="#"
    title="Delete this row"
    @click="deleteThisRow">
      <i class="fas fa-trash-alt"></i>
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
.fa-trash-alt {
  color: $grandaddy-purp;
}
</style>
