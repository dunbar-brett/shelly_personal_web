<template>
    <b-navbar toggleable="md" class="shelly-nav-bar">
        <b-navbar-brand :to="'/'">
            <img src="@/assets/shared/header-logo.png" class="brand-image" alt />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto text-right">
                <!-- Change these links to nuxt links -->
                <b-nav-item-dropdown
                    id="my-nav-dropdown"
                    class="sw-nav-link"
                    text="Portfolio"
                    toggle-class="nav-link-custom"
                    right>
                    <b-nav-item :to="'oils-gallery'">
                        Oil
                    </b-nav-item>
                    <!-- <b-dropdown-divider></b-dropdown-divider> -->
                    <b-nav-item :to="'water-color-gallery'">
                        Watercolor
                    </b-nav-item>
                </b-nav-item-dropdown>
                <b-nav-item :to="'about'" class="sw-nav-link">
                    About
                </b-nav-item>
                <b-nav-item href="https://society6.com/shellyweasel"
                            target="_blank"
                            class="sw-nav-link">
                    Store
                </b-nav-item>
                <b-nav-item :to="'contact'" class="sw-nav-link">
                    Contact
                </b-nav-item>
                <b-nav-item href="https://www.facebook.com/ShellyJ.Weasel/" target="_blank">
                    <img src="@/assets/shared/social-media/Facebook.png"
                        class="social-media-icon" alt/>
                </b-nav-item>
                <b-nav-item href="https://www.instagram.com/shelly_weasel/" target="_blank">
                    <img src="@/assets/shared/social-media/Insta.png" class="social-media-icon" alt />
                </b-nav-item>
                <b-nav-item href="https://www.youtube.com/channel/UCE3ghabnFeqbEc3qKb6CZgw" target="_blank">
                    <img src="@/assets/shared/social-media/Youtube.png"
                        class="social-media-icon" alt/>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    methods: {
        navToggler() {
            console.log("nav toggle clicked");
        }
    }
};
</script>

<style lang="scss">
.shelly-nav-bar {
    background-color: white;

    // roughly tablet up
    @media (min-width: map-get($grid-breakpoints, md)) {
        height: 6vh; //5.2rem;
    }

    .sw-nav-link {
        text-transform: uppercase;
        color: black;
        padding: 0 2rem;

        .nav-link {
            color: black;
        }
    }

    // bootstrap override: bad :(
    #my-nav-dropdown {
        border-radius: 0;

        &.show {
            // desktop
            @media (min-width: 640px) {
                background: rgba(
                    145,
                    216,
                    221,
                    0.7
                ); // why doesn't $sw-light-blue
            }

            ul {
                min-width: 11rem;
                top: 95%;
                border: none;
                border-radius: 0;
                
                li {
                    a {
                        text-align: right;
                    }
                }
                // desktop
                @media (min-width: 640px) {
                    //opacity: 0.5;
                    background: rgba(
                        145,
                        216,
                        221,
                        0.7
                    ); // why doesn't $sw-light-blue
                    li {
                        a {
                            padding: 0.5rem 0;
                            color: black;
                            text-align: center;
                        }
                    }
                }
            }
        }
        .nav-item {
            a:hover {
                opacity: 1;
                color: white;
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

        @media (min-width: map-get($grid-breakpoints, sm)) {
            width: 15rem;
            height: 3rem;
        }
    }
}
</style>