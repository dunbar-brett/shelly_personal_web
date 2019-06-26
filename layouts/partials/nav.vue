<template>
    <b-navbar toggleable="md"  class="shelly-nav-bar">
        <b-navbar-brand>Shelly Header</b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto text-right">
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
                <b-nav-item class="dumb">
                    <img src="@/assets/shared/social-media/Facebook.png" 
                            class="social-media-icon"
                            alt="">
                </b-nav-item>
                <b-nav-item class="dumb">
                    <img src="@/assets/shared/social-media/Insta.png" 
                            class="social-media-icon"
                            alt="">
                </b-nav-item>
                <b-nav-item class="dumb">
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

.shelly-nav-bar {
    background-color: $shelly-web-light-blue;
    // TODO: Image scaling is bonkers. might need smaller images
    // .dumb {
    //     width: 5%;
        
    //     .social-media-icon {
    //         width: 90%;
    //         height: 90%;
    //     }
    // }
}


</style>