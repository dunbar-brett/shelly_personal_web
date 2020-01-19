<template>
  <section>
    <div class="container-fluid">
      <Nav />
      <nuxt />
      <BottomSocialMediaIcons/>
    </div>
    <Footer />
  </section>
</template>

<script>
import Nav from './partials/nav.vue';
import BottomSocialMediaIcons from './partials/bottom-social-media-icons.vue';
import Footer from './partials/footer.vue';

export default {
  components: {
    Nav,
    BottomSocialMediaIcons,
    Footer
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
