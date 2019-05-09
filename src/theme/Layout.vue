<template>
  <div>
    <h2>Hello {{hello}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: 'world!'
    }
  }
}
</script>

<style>
  h2 {
    font-family: "Poppins-Regular"
  }
</style>
