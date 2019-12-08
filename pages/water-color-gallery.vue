<template>
    <main class="sw-swiper-wrapper">
        <h1>Watercolors</h1>
        <Swiper :images="images" />
    </main>
</template>

<script>
import Swiper from '../components/awesomeSwiper'
import * as images from '../static/portfolio/watercolor/watercolors.js';

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
// TODO revisit this
// .house{
//     width: auto !important;
// }
</style>
