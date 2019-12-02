<template>
    <section>
        <no-ssr>
            <slick ref="slick"
                :options="slickOptions"
                @afterChange="handleAfterChange"
                @beforeChange="handleBeforeChange"
                @breakpoint="handleBreakpoint"
                @destroy="handleDestroy"
                @edge="handleEdge"
                @init="handleInit"
                @reInit="handleReInit"
                @setPosition="handleSetPosition"
                @swipe="handleSwipe"
                @lazyLoaded="handleLazyLoaded"
                @lazyLoadError="handleLazeLoadError">
                <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            </slick>
        </no-ssr>
    </section>
</template>

<script>
import Slick from 'vue-slick'
export default {
    components: {
        Slick,
    },
    data() {
        return {
            slickOptions: {
                //options can be used from the plugin documentation
                slidesToShow: 4,
                infinite: true,
                accessibility: true,
                adaptiveHeight: false,
                arrows: true,
                dots: true,
                draggable: true,
                edgeFriction: 0.30,
                swipe: true
            },
            images: [
            {
                id: 0,
                path: 'https://i.ytimg.com/vi/HSO_pyXrcTs/hqdefault.jpg'
            },
            {
                id: 0,
                path: 'https://i.pinimg.com/236x/3f/55/f4/3f55f4487cbf02bf779dd1128b346d3d--orange-sweaters-cat-sweaters.jpg'
            },
            {
                id: 0,
                path: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal01/2010/10/7/14/enhanced-buzz-13063-1286477213-45.jpg'
            },
        ]
        }
    },
}
</script>

<style>
@import 'slick-carousel/slick/slick.css';
</style>