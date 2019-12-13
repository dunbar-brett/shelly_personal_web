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
  watch: {
    $route(to, from) {
      // react to route changes...
      if (to.fullPath.includes(from.fullPath)) {
        // remove from path fix for nuxt generate bug
        to.fullPath = to.fullPath.replace(from.fullPath, "");
      }
    }
  },
  beforeMount() {
      document.documentElement.style.overflowY = 'auto';
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';
  
  // this is probably really bad
  body.bad-hack {
    overflow-y: auto;
  }
</style>
