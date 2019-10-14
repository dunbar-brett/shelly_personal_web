<template>
  <div class="container-fluid">
    <Nav />
    <nuxt />
  </div>
</template>

<script>
import Nav from './partials/nav.vue';

export default {
  components: {
    Nav
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';
  
  // this is probably really bad
  body.bad-hack {
    overflow: auto;
  }
</style>
