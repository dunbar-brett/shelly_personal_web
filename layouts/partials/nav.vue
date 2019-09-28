<template>
    <b-navbar toggleable="md"  class="shelly-nav-bar">
        <b-navbar-brand>
            <img src="@/assets/shared/header-logo.png" 
                 class="brand-image"
                 alt="">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto text-right">
                <!-- Change these links to nuxt links -->
                <b-nav-item-dropdown id="my-nav-dropdown"
                    class="sw-nav-link"
                    text="Portfolio"
                    toggle-class="nav-link-custom"
                    right>
                    <b-dropdown-item>Paintings</b-dropdown-item>
                    <!-- <b-dropdown-divider></b-dropdown-divider> -->
                    <b-dropdown-item>Illustrations</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item class="sw-nav-link">About</b-nav-item>
                <b-nav-item class="sw-nav-link">Store</b-nav-item>
                <b-nav-item class="sw-nav-link">Contact</b-nav-item>
                <b-nav-item>
                    <img src="@/assets/shared/social-media/Facebook.png" 
                            class="social-media-icon"
                            alt="">
                </b-nav-item>
                <b-nav-item>
                    <img src="@/assets/shared/social-media/Insta.png" 
                            class="social-media-icon"
                            alt="">
                </b-nav-item>
                <b-nav-item>
                    <img src="@/assets/shared/social-media/Youtube.png" 
                            class="social-media-icon"
                            alt="">
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

export default {
    methods: {
        navToggler() {
            console.log('nav toggle clicked');
        }
    }
}

</script>

<style lang="scss">
/// $sw-light-blue; color for menu dropdown background TODO
.shelly-nav-bar {
    background-color: white;

        //height: 10vh;
    // roughly tablet up
    @media (min-width: map-get($grid-breakpoints, md)){
        height: 6vh;//5.2rem; 
    }

    .sw-nav-link {
        text-transform: uppercase;
        color: black;
        padding: 0 2rem;
    }

    // bootstrap override: bad :(
    #my-nav-dropdown {
        border-radius: 0;

        &.show{
            ul {
                background-color: $sw-light-blue;
                li {
                    padding: 0.5rem 0;
                }
            }
        }
    }

    .social-media-icon {
        object-fit: cover;
        width: 1.5rem;
        height: 1.5rem;
    }

    .brand-image {
        object-fit: cover;
        width: 13rem;
        height: 2rem;

        @media (min-width: map-get($grid-breakpoints, sm)){
            width: 15rem;
            height: 3rem;
        }
    }
}
</style>