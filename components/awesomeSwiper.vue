<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="image in images" :key="image.id">
        <img :src="image.path">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        images: [
            {
                id: 0,
                path: 'https://i.ytimg.com/vi/HSO_pyXrcTs/hqdefault.jpg'
            },
            {
                id: 1,
                path: 'https://i.pinimg.com/236x/3f/55/f4/3f55f4487cbf02bf779dd1128b346d3d--orange-sweaters-cat-sweaters.jpg'
            },
            {
                id: 2,
                path: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal01/2010/10/7/14/enhanced-buzz-13063-1286477213-45.jpg'
            },
        ],
        swiperOption: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
            el: '.swiper-pagination',
            clickable: true
            }
        }
      }
    },
  }
</script>


<style lang="scss" scoped>
  .swiper-slide {
    width: 60%;
  }
  .swiper-slide:nth-child(2n) {
      width: 40%;
  }
  .swiper-slide:nth-child(3n) {
      width: 20%;
  }


  
</style>