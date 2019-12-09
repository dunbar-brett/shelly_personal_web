<template>
  <div class="container-fluid">
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from './partials/nav.vue';
import Footer from './partials/footer.vue';

export default {
  components: {
    Nav,
    Footer
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
