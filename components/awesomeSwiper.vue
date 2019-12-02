<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="image in images" :key="image.id">
        <img :src="'portfolio/' + image.filename">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
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
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 0,
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