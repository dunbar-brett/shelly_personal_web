<template>
  <div class="shelly-home">
    <no-ssr placeholder="Loading...">
      <Gallery></Gallery>
    </no-ssr>
  </div>
</template>

<script>
import Gallery from '../components/fullPageGallery';
export default {
  layout: 'home-layout',
  components: {
    Gallery
  }
}
</script>

<style lang="scss">
</style>
