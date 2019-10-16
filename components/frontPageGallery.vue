<template>
  <div class="front-page-gallery">
        <b-carousel id="carousel-1"
                    class="shelly-carousel-container carousel-fade"
                    v-model="slide"
                    :interval="0"
                    controls
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd">
            <!-- <b-carousel-slide class="shelly-carousel-item face" 
                              img-src="@/assets/gallery/squished-face.png">
            </b-carousel-slide>
            <b-carousel-slide class="shelly-carousel-item house" 
                              img-src="@/assets/gallery/house.jpg">
            </b-carousel-slide>
            <b-carousel-slide class="shelly-carousel-item mtn" 
                              img-src="@/assets/gallery/mountain.png">
            </b-carousel-slide> -->
          <!--  -->
          <b-carousel-slide v-for="image in galleryImages" 
              :key="image.key"
              :class="`shelly-carousel-item-2 ${image.class}`"
              :img-src="require(`@/assets/gallery/${image.path}`)">
          </b-carousel-slide>
        </b-carousel>
    </div> 
    <!-- TODO render images -->
</template>

<script>
export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        mobileImages: [
          {key: 1, path: 'mobile/MHome1.jpg', class: 'mobile'},
          {key: 2, path: 'mobile/MHome2.jpg', class: 'mobile'},
          {key: 3, path: 'mobile/MHome3.jpg', class: 'mobile'},
        ],
        desktopImages: [
          {key: 1, path: 'desktop/Home1.jpg', class: 'desktop'},
          {key: 2, path: 'desktop/Home2.jpg', class: 'desktop'},
          {key: 3, path: 'desktop/Home3.jpg', class: 'desktop'},
        ],
        // galleryFilePath: [],
      }
    },
    computed: {
      galleryImages() {
        if (this.displayIsPortrait) {
          return this.mobileImages;
        } else {
          return this.desktopImages;
        }
      },
      displayIsPortrait() {
        if (window) {
          return window.innerWidth < window.innerHeight;
        } else {
          return false;
        }
      }
    },
    mounted() {
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
    }
}
</script>

<style lang='scss'>
.front-page-gallery {
  width: 100%;
  overflow:hidden; /*hide bounds of image */
  margin:0;   /*reset margin of figure tag*/

  .shelly-carousel-item-2 {
    &.desktop {
      img {
        height: 100vh;
      }
    }

    &.mobile {
      img {
        width: 100vw;
      }
    }
  }



  .shelly-carousel-item {
    //margin:-21.875% 0;
    //display:block; /*remove inline-block spaces this broke b-carousel*/
    
    //left: -254.313px;
    top: 0px;
    width: 1857.2px;
    height: 94vh;
    position: relative;
    font-size: 0px;

    @include for-phone-only {
    }
    @include for-tablet-portrait-up {
    }
    @include for-tablet-landscape-up {
    }
    @include for-md-desktop-up {
    }
    @include for-big-desktop-up {
      width: 100%;
    }
  }
  .face {
    @include for-phone-only {
      width: 50rem;
      left: -10rem;
    }

    @include for-tablet-portrait-up {
      width: 80rem;
      left: -10rem;
    }

    @include for-tablet-landscape-up {
      width: 88rem;
      left: -3rem;
    }

    @include for-md-desktop-up {
      left: 0;
    }

    @include for-big-desktop-up {
      width: 144rem;
      left: -10rem;
      top: -21rem;
    }
  }

  .house {
    @include for-phone-only {
      left: -15rem;
      width: 72rem;
    }

    @include for-tablet-portrait-up {
      left: -13rem;
      width: 92rem;
    }

    @include for-tablet-landscape-up {
      left: -6rem;
    }
    
    @include for-big-desktop-up {
      width: 131rem;
      left: -13rem;
    }
  }

  .mtn {
    @include for-phone-only {
      left: -20rem;
      width: 66rem;
    }

    @include for-tablet-portrait-up {
      left: -14rem;
      width: 88rem;
    }

    @include for-tablet-landscape-up {
      left: -8rem;
      width: 87rem;
    }

    @include for-big-desktop-up {
      width: 127rem;
      left: -13rem;
    }

  }
  
}
/*
for-phone-only == max-width: 599px
for-tablet-portrait-up == min-width: 600px
for-tablet-landscape-up == min-width: 900px
for-desktop-up == min-width: 1200px
for-md-desktop-up == min-width: 1400px
for-big-desktop-up == min-width: 1800px
*/

/*
  Bootstrap Carousel Fade Transition (for Bootstrap 3.3.x)
  CSS from:       http://codepen.io/transportedman/pen/NPWRGq
  and:            http://stackoverflow.com/questions/18548731/bootstrap-3-carousel-fading-to-new-slide-instead-of-sliding-to-new-slide
  Inspired from:  http://codepen.io/Rowno/pen/Afykb 
*/
.carousel-fade .carousel-inner .item {
  opacity: 0;
  transition-property: opacity;
}

.carousel-fade .carousel-inner .active {
  opacity: 1;
}

.carousel-fade .carousel-inner .active.left,
.carousel-fade .carousel-inner .active.right {
  left: 0;
  opacity: 0;
  z-index: 1;
}

.carousel-fade .carousel-inner .next.left,
.carousel-fade .carousel-inner .prev.right {
  opacity: 1;
}

.carousel-fade .carousel-control {
  z-index: 2;
}

/*
  WHAT IS NEW IN 3.3: "Added transforms to improve carousel performance in modern browsers."
  Need to override the 3.3 new styles for modern browsers & apply opacity
*/
@media all and (transform-3d), (-webkit-transform-3d) {
    .carousel-fade .carousel-inner > .item.next,
    .carousel-fade .carousel-inner > .item.active.right {
      opacity: 0;
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
    }
    .carousel-fade .carousel-inner > .item.prev,
    .carousel-fade .carousel-inner > .item.active.left {
      opacity: 0;
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
    }
    .carousel-fade .carousel-inner > .item.next.left,
    .carousel-fade .carousel-inner > .item.prev.right,
    .carousel-fade .carousel-inner > .item.active {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
    }
}


</style>
