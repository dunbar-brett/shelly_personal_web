<template>
  <div class="sw-home-container">
    <!-- <no-ssr placeholder="loading..."></no-ssr> NOT WORKING -->
    <Nav />
    <nuxt />
  </div>
</template>

<script>
import Nav from './partials/nav.vue';

export default {
    components: {
        Nav
    },
    beforeMount() {
        document.documentElement.style.overflow = 'hidden';
    },
}
</script>

<style lang="scss">
    @import '@/assets/scss/main.scss';
    .bad-hack {
        overflow: hidden;
    }
</style>
