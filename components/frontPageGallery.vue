<template>
    <div class="front-page-gallery">
        <b-carousel id="carousel-1"
                    class="shelly-carousel-container"
                    v-model="slide"
                    :interval="0"
                    controls
                    indicators
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd">
            <!-- @/assets/gallery/ -->
            <!-- Text slides with image -->
            <b-carousel-slide class="gallery-image" img-src="@/assets/gallery/squished-face.png">
            </b-carousel-slide>

            <b-carousel-slide img-src="@/assets/gallery/house.jpg">
            </b-carousel-slide>

            <b-carousel-slide img-src="@/assets/gallery/mountain.png">
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style lang='scss'>
.front-page-gallery {
  overflow-x: hidden;
  overflow-y: auto;
  //width: 200vw;
  
  .shelly-carousel-container {
    .gallery-image {
      background-size: cover;
      max-height: 100vh; 
    }

  }
}
</style>
