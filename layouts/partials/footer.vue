<template>
    <footer id="footer" class="footer text-center" :class="{'on-about-page' : showAboutClass}">
        <small class="footer-copy">
            &copy; 2020 Shelly Weasel | built by Brett Dunbar
        </small>
    </footer>
</template>

<script>
// THIS IS ONLY SHOWN IN A VERY LIMITED WINDOW
export default {
    data() {
        return{
            showAboutClass: false,
            aboutPageName: 'about'
        };
    },
    watch: {
        $route(to, from) {
            if (to.name == this.aboutPageName) {
                this.showAboutClass = true;
            } else {
                this.showAboutClass = false;
            }
        }
    }
}
</script>

<style lang="scss">
.footer {
    width: 100%;
    height: 2.5rem;
    bottom: 0%;
    background-color: #6F6F6F;
    color: white;
    position: relative;

    // mobile portfolio breakpoint
    @media (min-width: 749px) { 
        position: fixed;
    }

    &.on-about-page{
        position: relative;
    }

    .footer-copy {
        padding-top: 0.75rem;
        display: block;
    }
}
</style>