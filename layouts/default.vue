<template>
  <div class="shelly-container">
    <Nav />
    <nuxt />
  </div>
</template>

<script>
import Nav from './partials/nav.vue';

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';
</style>
