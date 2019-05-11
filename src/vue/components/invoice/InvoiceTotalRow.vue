<template>
  <tbody>
    <tr>
      <td colspan="2"></td>
      <td>Grand Total</td>
      <td>{{ getGrandTotal }}</td>
    </tr>
  </tbody>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getGrandTotal'])
  },
}
</script>
