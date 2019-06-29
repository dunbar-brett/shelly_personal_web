<template>
  <div>
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
.shelly-container {
  overflow-x: hidden;
  overflow-y: auto;
  width: 200vw;
}
</style>
