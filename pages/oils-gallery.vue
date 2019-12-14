<template>
    <main class="sw-swiper-wrapper">
        <header >
            <h1>Oil Paintings</h1>
        </header>
        <no-ssr placeholder="Loading...">
            <Swiper class="portfolio-wrapper hide-portfolio-carousel" :images="images" />
        </no-ssr>
        <section class="hide-portfolio-list">
            <PortfolioList :images="images"></PortfolioList>
        </section>
    </main>
</template>

<script>
import Swiper from '../components/awesomeSwiper'
import * as images from '../static/portfolio/oils/oil-paintings.js';
import PortfolioList from '../components/portfolioList';

export default {
    components: { 
        Swiper,
        PortfolioList 
    },
    data() {
        return {
            images: images.oils,
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/custom.scss';
// TODO revisit this
// .fight-club {
//     width: auto !important;
// }
</style>
