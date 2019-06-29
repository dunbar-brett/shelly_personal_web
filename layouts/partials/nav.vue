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
                    text="Dropdown"
                    toggle-class="nav-link-custom"
                    right>
                    <b-dropdown-item>Paintings</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Illustrations</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item>About</b-nav-item>
                <b-nav-item>Store</b-nav-item>
                <b-nav-item>Contact</b-nav-item>
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
/// $shelly-web-light-blue; color for menu dropdown background TODO
/// TODO: overflow-x: hidden
.shelly-nav-bar {
    background-color: white;

    // roughly tablet up
    @media (min-width: map-get($grid-breakpoints, md)){
        height: 5.2rem; 
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