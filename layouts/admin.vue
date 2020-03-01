<template>
  <div class="sw-home-container">
    <div class="container-fluid">
      <Nav />
    </div>
    <nuxt />
    <Footer/>
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
</style>
