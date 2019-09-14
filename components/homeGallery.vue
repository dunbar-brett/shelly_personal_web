<template>
    <div class="home-gallery">
        <slick
            ref="slick"
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
            <img src="@/assets/gallery/squished-face.png" alt="">
            <img src="@/assets/gallery/house.jpg" alt="">
            <img src="@/assets/gallery/mountain.png" alt="">
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
    components: {Slick},

}
</script>

<style>

</style>
