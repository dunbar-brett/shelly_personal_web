<template>
  <div class="sw-home-container">
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
    created() {
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
