<template>
    <b-navbar toggleable="md" class="shelly-nav-bar">
        <!-- this was set to index for production -->
        <!-- <b-navbar-brand :to="'index'"> -->
        <b-navbar-brand :to="'/'">
            <img src="@/assets/shared/header-logo.png" class="brand-image" alt />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto text-right">
                <!-- <b-nav-item-dropdown
                    id="my-nav-dropdown"
                    class="sw-nav-link"
                    text="Portfolio"
                    toggle-class="nav-link-custom"
                    right>
                    <b-nav-item v-on:click.native="dropDownClicked()" :to="'oils-gallery'">
                        Oil
                    </b-nav-item>
                    <b-nav-item v-on:click.native="dropDownClicked()" :to="'water-color-gallery'">
                        Watercolor
                    </b-nav-item>
                </b-nav-item-dropdown> -->
                <b-nav-item :to="'oils-gallery'" class="sw-nav-link">
                    Oil
                </b-nav-item>
                <b-nav-item :to="'water-color-gallery'" class="sw-nav-link">
                    Watercolor
                </b-nav-item>
                <b-nav-item :to="'water-color-gallery'" class="sw-nav-link">
                    About
                </b-nav-item>
                <b-nav-item href="https://society6.com/shellyweasel"
                            target="_blank"
                            class="sw-nav-link">
                    Store
                </b-nav-item>
                <b-nav-item :href="'mailto:' + email" class="sw-nav-link" @click="copyToClipboard()">
                    Contact
                </b-nav-item>
                <b-nav-item href="https://www.facebook.com/ShellyJ.Weasel/"
                    class="hide-tablet-down bad-social-media-hide-hack" target="_blank">
                    <img src="@/assets/shared/social-media/Facebook.png"
                        class="social-media-icon" alt/>
                </b-nav-item>
                <b-nav-item href="https://www.instagram.com/shelly_weasel/"
                    class="hide-tablet-down bad-social-media-hide-hack" target="_blank">
                    <img src="@/assets/shared/social-media/Insta.png" class="social-media-icon" alt />
                </b-nav-item>
                <b-nav-item href="https://www.youtube.com/channel/UCE3ghabnFeqbEc3qKb6CZgw"
                    class="hide-tablet-down bad-social-media-hide-hack" target="_blank">
                    <img src="@/assets/shared/social-media/Youtube.png"
                        class="social-media-icon" alt/>
                </b-nav-item>
                <b-nav-text class="hide-tablet-up">
                    <a href="https://www.facebook.com/ShellyJ.Weasel/" target="_blank">
                        <img src="@/assets/shared/social-media/Facebook.png"
                            class="social-media-icon" alt/>
                    </a>
                    <a href="https://www.instagram.com/shelly_weasel/" target="_blank">
                        <img src="@/assets/shared/social-media/Insta.png" class="social-media-icon" alt />
                    </a>
                    <a href="https://www.youtube.com/channel/UCE3ghabnFeqbEc3qKb6CZgw" target="_blank">
                        <img src="@/assets/shared/social-media/Youtube.png"
                            class="social-media-icon" alt/>
                    </a>
                </b-nav-text>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            email: 'weaselshelly@gmail.com'
        }
    },
    methods: {
        dropDownClicked() {
            console.log("clicked")
            $('#my-nav-dropdown').toggle();
        },
        copyToClipboard() {
            navigator.clipboard.writeText(this.email).then(function() {
                console.log('Async: Copying to clipboard was successful!');
            }, function(err) {
                console.error('Async: Could not copy text: ', err);
            });
            this.popToast();
        },
        popToast() {
            //https://shakee93.github.io/vue-toasted/?ref=madewithvuejs.com
            let toast = this.$toasted.show("Email Copied to Clipboard!", { 
                theme: "outline", 
                position: "top-center", 
                duration : 10000
            });
        }
    }
};
</script>

<style lang="scss">
.shelly-nav-bar {
    background-color: white;
    padding: 1.5rem 0rem !important;

    // roughly tablet up
    @media (min-width: map-get($grid-breakpoints, md)) {
        height: 5vh;
    }

    .sw-nav-link {
        text-transform: uppercase;
        color: black;
        padding: 0 0rem;

        @include bad-nav-hack-upper {
            padding: 0 1rem;
        }

        .nav-link {
            color: black !important;
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

        @include mobile-nav {
            width: 2rem;
            height: 2rem;
            margin-left: 1rem;
        }
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