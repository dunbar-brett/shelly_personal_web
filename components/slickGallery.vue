<template>
  <div class="slick-gallery">
    
    <slick ref="slick" :options="slickOptions" class="sw-carousel">
            <img class="shelly-carousel-item" src="@/assets/gallery/squished-face.png"/>
            <img class="shelly-carousel-item" src="@/assets/gallery/house.jpg"/>
            <img class="shelly-carousel-item" src="@/assets/gallery/mountain.png"/>
    </slick>
    
  </div>
</template>

<script>
// if (process.client) {
//   require('slick-carousel')
// }
import Slick from 'vue-slick';
// const Slick = process.BROWSER_BUILD ? require('slick-carousel') : null;
// import '~/node_modules/slick-carousel/slick/slick.css';
export default {
    components: {
      Slick,
    },
    data() {
        return {
            slickOptions: {
                //options can be used from the plugin documentation
                slidesToShow: 1,
                infinite: true,
                arrows: true,
                dots: true,
                draggable: true,
                edgeFriction: 0.30,
                swipe: true
            },
            slickComp: '',
        }
    },
    mounted() {
        this.$nextTick(function () {
           this.slickComp = 'slick'
        });
    },
    methods: {
        next() {
            this.$refs.slick.next()
        },
        prev() {
            this.$refs.slick.prev()
        },
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$refs.slick.reSlick()
        }
    }
}
</script>

<style lang="scss">
@import 'slick-carousel/slick/slick.css';
.slick-gallery{
    .sw-carousel {
        width: 100%;
        img {
            width: 100%;
            height: auto;
        }
    }
}
</style>
