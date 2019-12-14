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
    $route(to, from, next) {
      // react to route changes...
      console.log(`from path : ${from.fullPath}`)
      console.log(to);
      console.log(`to path : ${to.fullPath}`)
      console.log(from);
      console.log(`route path : ${this.$route.fullPath}`)
      console.log(this.$route)
      //this.$route.fullPath = this.$route.fullPath.replace(from.fullPath, "");
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
