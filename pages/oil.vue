<template>
    <main class="sw-swiper-wrapper">
        <header >
            <h1>Oil Paintings</h1>
        </header>
        <client-only placeholder="Loading...">
            <Swiper class="portfolio-wrapper hide-portfolio-carousel" :images="images" />
        </client-only>
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
            metaTitle: 'Oil Painting Gallery | Shelly Weasel | Portland Oregon Artist',
            metaDescription: 'Oil paintings by Shelly Weasel. Please contact Shelly Weasel for details or more information about commission paintings.'
        }
    },
    head() {
        return {
            title: this.metaTitle,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: this.metaDescription }
            ]
        };
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/custom.scss';
// TODO revisit this -- custom class?
// .fight-club {
//     width: auto !important;
// }
</style>
