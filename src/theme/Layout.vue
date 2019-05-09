<template>
  <div>
    <h2>Hello {{hello}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: 'world...'
    }
  }
}
</script>

<style lang="scss">
  $blue-dream: #0072F0;
  $green-crack: #1CE0AD;
  $la-confidential: #0022AC;
  $nyc-diesel: #01BBB4;
  $white-widow: #ffffff;
  $grandaddy-purp: #1B1443;
  h2 {
    color: $blue-dream;
  }
</style>
