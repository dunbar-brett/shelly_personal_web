<template>
  <div class="shelly-home">
    <Gallery></Gallery>
  </div>
</template>

<script>
import Gallery from '../components/frontPageGallery';
export default {
  components: {
    Gallery
  }
}
</script>

<style lang="scss">
// this is probably really bad
body {
  overflow: hidden;
}
</style>
