<template>
    <main class="sw-swiper-wrapper">
        <h1>Oils</h1>
        <Swiper :images="images" />
    </main>
</template>

<script>
import Swiper from '../components/awesomeSwiper'
import * as images from '../static/portfolio/oils/oil-paintings.js';

export default {
    components: { Swiper },
    data() {
        return {
            images: images.oils,
        }
    }
}
</script>

<style lang="scss">
// TODO revisit this
// .fight-club {
//     width: auto !important;
// }
</style>
