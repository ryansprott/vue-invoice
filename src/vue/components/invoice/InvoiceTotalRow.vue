<template>
  <tbody>
    <tr>
      <th colspan="3"></th>
      <th>Grand Total</th>
    </tr>
    <tr>
      <td colspan="3"></td>
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
