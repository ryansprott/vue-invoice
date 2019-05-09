<template>
  <div>
    <h2>Hello {{hello}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: 'world.'
    }
  }
}
</script>

<style lang="scss">
  h2 {
    color: $blue-dream;
  }
</style>
