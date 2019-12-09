<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <section v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div :class="'swiper-slide ' + image.customClass" v-for="image in images" :key="image.id">
        <img :src="'portfolio/' + image.filename" class="images">
      </div>
    </div>
    <div class="swiper-pagination custom-pagination" ></div>
    <div class="swiper-button-prev custom-chevrons" slot="button-prev"></div>
    <div class="swiper-button-next custom-chevrons" slot="button-next"></div>
  </section>
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
      windowWidth: 0,
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
  watch: {
    windowWidth(newVal) {
      if (newVal < 1495) {
        this.updateSlidesPerView(1)
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);

      //Init
      this.getWindowWidth();
      if (this.windowWidth < 1495) {
        this.updateSlidesPerView(1)
      }
    });
  },
  methods: {
    updateSlidesPerView(amount) {
      this.swiperOption.slidesPerView = amount;
      this.mySwiper.updateSlides();
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  }
}
</script>


<style lang="scss" scoped>
.images {
  height: 30rem;
}
.custom-pagination {
  top: 95vh;
}
.custom-chevrons {
  top: 50vh;
}
  //.swiper-slide {
    //width: 80% !important;
  //}
  // .swiper-slide:nth-child(3n) {
  //     width: 20%;
  // }
</style>