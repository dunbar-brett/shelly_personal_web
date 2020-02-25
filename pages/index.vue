<template>
  <div class="shelly-home">
    <client-only placeholder="Loading...">
      <Gallery></Gallery>
    </client-only>
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
