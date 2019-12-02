<template>
    <div>
        <main class="sw-swiper-wrapper">
            <no-ssr>
                <Swiper :images="images" />
            </no-ssr>
        </main>
    </div>
</template>

<script>
import Swiper from '../components/awesomeSwiper'
import * as images from '../assets/portfolio/oils/oil-paintings.js';

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

</style>
