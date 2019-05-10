<template>
  <tr>
    <td>
      <input class="form-control" v-model="row.description">
    </td>
    <td>
      <input class="form-control" v-model="row.quantity">
    </td>
    <td>
      <input class="form-control" v-model="row.rate">
    </td>
    <td>
      <a class="btn btn-danger" href="#" @click="deleteRow">Delete</a>
    </td>
    <td>
      <div>{{ getTotal }}</div>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['row'],
  computed: {
    getTotal: function () {
      return (this.row.rate * this.row.quantity).toFixed(2)
    },
  },
  methods: {
    deleteRow: function () {
      this.$store.dispatch('deleteRow', this.row)
    },
  }
}
</script>
