<template>
    <main class="sw-swiper-wrapper">
        <header>
            <h1>Watercolor Paintings</h1>
        </header>
        <no-ssr placeholder="Loading...">
            <Swiper class="portfolio-wrapper hide-portfolio-carousel" :images="images" />
        </no-ssr>
        <section class="hide-portfolio-list">
            <PortfolioList :images="images"></PortfolioList>
        </section>
        <!-- <Footer/> -->
    </main>
</template>

<script>
import Swiper from '../components/awesomeSwiper'
import * as images from '../static/portfolio/watercolor/watercolors.js';
import PortfolioList from '../components/portfolioList';
import Footer from '../layouts/partials/footer.vue';

export default {
    components: {
        Swiper,
        PortfolioList
    },
    data() {
        return {
            images: images.watercolors,
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/custom.scss';
// TODO revisit this
// .house{
//     width: auto !important;
// }
</style>
