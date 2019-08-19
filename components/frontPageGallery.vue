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
            <b-carousel-slide class="shelly-carousel-item" img-src="@/assets/gallery/squished-face.png">
            </b-carousel-slide>
            <b-carousel-slide class="shelly-carousel-item" img-src="@/assets/gallery/house.jpg">
            </b-carousel-slide>
            <b-carousel-slide class="shelly-carousel-item" img-src="@/assets/gallery/mountain.png">
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
    .carousel-item {
      height: 94vh;
      min-height: 94vh;
      // img {
      //   width: 200%;
      // }
      //width: 100vw;
      // position: relative;
    //   left: -172.011px;
    // top: 0px;
    // width: 3156.55px;
    // height: 2269px;
    }
}
</style>
