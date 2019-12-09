<template>
  <div class="sw-home-container">
    <!-- <no-ssr placeholder="loading..."></no-ssr> NOT WORKING -->
    <div class="container-fluid">
      <Nav />
    </div>
    <nuxt />
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
    beforeMount() {
        document.documentElement.style.overflow = 'hidden';
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
.bad-hack {
    overflow: hidden;
}
</style>
