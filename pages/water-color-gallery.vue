<template>
    <main class="sw-swiper-wrapper">
        <Swiper :images="images" />
    </main>
</template>

<script>
import Swiper from '../components/awesomeSwiper'
import * as images from '../assets/portfolio/watercolor/watercolors.js';

export default {
    components: {
        Swiper
    },
    data() {
        return {
            images: images.watercolors,
        }
    }
}
</script>

<style lang="scss">

</style>
