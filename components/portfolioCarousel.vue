<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <!-- Slides with image only -->
      <div v-for="image in images" :key="image.id">
        <b-carousel-slide :img-src="image.path" class="sw-image"></b-carousel-slide>
      </div>
    </b-carousel>
    <!-- Debug stuff -->
    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        images: [
            {
                id: 0,
                path: 'https://i.ytimg.com/vi/HSO_pyXrcTs/hqdefault.jpg'
            },
            {
                id: 0,
                path: 'https://i.pinimg.com/236x/3f/55/f4/3f55f4487cbf02bf779dd1128b346d3d--orange-sweaters-cat-sweaters.jpg'
            },
            {
                id: 0,
                path: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal01/2010/10/7/14/enhanced-buzz-13063-1286477213-45.jpg'
            },
        ]
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

<style lang="scss">
.sw-image {
    img{
        width: auto;
        height: auto;
        max-height: 50vh;
    }
}
</style>