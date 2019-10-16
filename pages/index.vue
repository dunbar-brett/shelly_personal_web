<template>
  <div class="shelly-home">
    <no-ssr placeholder="loading...">
      <Gallery></Gallery>
    </no-ssr>
  </div>
</template>

<script>
import Gallery from '../components/frontPageGallery';
export default {
  layout: 'home-layout',
  components: {
    Gallery
  }
}
</script>

<style lang="scss">
</style>
