<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div :class="'swiper-slide ' + image.customClass" v-for="image in images" :key="image.id">
        <img :src="'portfolio/' + image.filename">
      </div>
    </div>
    <div class="swiper-pagination" ></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
//https://github.surmon.me/vue-awesome-swiper/
export default {
  props: {
      images: {
      }
  },
  data () {
    return {
      swiperOption: {
        centeredSlides: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
}
</script>


<style lang="scss" scoped>
  //.swiper-slide {
    //width: 80% !important;
  //}
  // .swiper-slide:nth-child(3n) {
  //     width: 20%;
  // }
</style>