<template>
    <main class="sw-swiper-wrapper">
        <header>
            <h1>Watercolor Paintings</h1>
        </header>
        <client-only placeholder="Loading...">
            <Swiper class="portfolio-wrapper hide-portfolio-carousel" :images="images" />
        </client-only>
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
            metaTitle: 'Watercolor Gallery | Shelly Weasel | Portland Oregon Artist',
            metaDescription: 'Watercolor paintings by Shelly Weasel. Please contact Shelly Weasel for details or more information about commission paintings.'
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
// TODO revisit this
// .house{
//     width: auto !important;
// }
</style>
