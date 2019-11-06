<template>
    <div class="container">
        <div class="row contact-container">
            <div class="col">
                <div class="row">
                    <div class="col-md-6 align-self-center">
                        <img src="@/assets/about/about-hero.jpg" 
                            alt="Shelly Weasel About Photo"
                            class="sw-hero-image">
                    </div>
                    <div class="col-md-6 align-self-center">
                        <!-- <h1 class="text-center contact-title">Hi! My name is Shelly.</h1> -->
                        <p class="contact-copy">
                            Shelly Weasel Contemporary artist. Born in Defiance, Ohio, she has 
                            lived in Tucson, AZ and currently resides in Portland, OR. 
                        </p>
                        <p class="contact-copy">
                            She is mostly known for portraiture using watercolor, paintings created by 
                            underpainting with inks, watercolor over, with hand sewn details on heavy 
                            paper. She also paints using oil and egg tempera, mixing her own paints, 
                            using traditional techniques. 
                        </p>
                    </div>
                </div>
                <div class="row social-media-icons">
                    <div class="col-md-6 col-sm-12 text-center">
                        <a href="https://www.facebook.com/ShellyJ.Weasel/" class="social-media-icon">
                            <img src="@/assets/shared/social-media/Facebook.png"/>
                        </a>
                        <a href="https://www.instagram.com/shelly_weasel/" class="social-media-icon">
                            <img src="@/assets/shared/social-media/Insta.png"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCE3ghabnFeqbEc3qKb6CZgw"
                            target="_blank"
                            class="social-media-icon">
                            <img src="@/assets/shared/social-media/Youtube.png"/>
                        </a>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12">
                        <h1>EXHIBITIONS:</h1>
                        <div class="row">
                            <div class="col-3">Date</div>
                            <div class="col-9">Title</div>
                        </div>
                        <div class="row">
                            <div class="col-3">Date</div>
                            <div class="col-9">Title</div>
                        </div>
                        <div class="row">
                            <div class="col-3">Date</div>
                            <div class="col-9">Title</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  created() {
    this.$nextTick(() => {
        document.documentElement.style.overflow = 'auto';
    });
  }
}
</script>

<style lang="scss">
.contact-container {
    padding-top: 4rem;

    .sw-hero-image {
        max-width: 100%;
        // tablet below
        @media (max-width: map-get($grid-breakpoints, md)) {
            padding-bottom: 2rem;
        }
    }

    .contact-title {
        font-size: 3rem;
    }
    .contact-copy {
        line-height: 1.5rem;
        font-size: 1.1rem;
    }

    .social-media-icons {
        padding-top: 1.5rem;

        .social-media-icon {
            img {
                width: 3.5rem;
                height: 3.5rem;
                @media (max-width: map-get($grid-breakpoints, md)) {
                    width: 2.5rem;
                    height: 2.5rem;
                }
            }
        }
        .social-media-icon:not(:first-of-type) {
            img {
                margin-left: 1rem;
            }
        }
    }
}

</style>
