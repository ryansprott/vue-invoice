<template>
  <div>
    <picture>
        <source srcset="../images/leaflink.svg" media="(min-width: 800px)">
        <img id="logo" height="75px" src="../images/ll.svg" alt="LeafLink logo">
    </picture>
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
    font-family: 'Poppins'
  }
</style>
