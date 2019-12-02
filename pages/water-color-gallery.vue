<template>
    <main class="sw-swiper-wrapper">
        <Swiper />
    </main>
</template>

<script>
// TODO needs prop with type of portfolio : illustrations / paintings / etc
// import Carousel from '../components/portfolioSlickCarousel'
import Swiper from '../components/awesomeSwiper'
export default {
    components: {
        Swiper
    }

}
</script>

<style lang="scss">
.sw-swiper-wrapper {
    height: 50vh;
}
</style>
