<template>
  <div>
    <picture>
        <source srcset="../images/leaflink.svg" media="(min-width: 768px)">
        <img id="logo" src="../images/ll.svg" alt="LeafLink logo">
    </picture>
    <h1>Hello {{hello}}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
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
  h1 {
    color: $grandaddy-purp;
    font-family: 'Poppins';
    text-align: center;
  }
  p {
    background-color: $white-widow;
    color: $la-confidential;
    font-family: 'Noto Sans';
  }
</style>
