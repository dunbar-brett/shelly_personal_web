<template>
    <main>
        <h1 class="hide-tablet-up">About Me</h1>
        <div class="container">
            <div class="row contact-container">
                <div class="col">
                    <h1 class="hide-tablet-down">About Me</h1>
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <img src="@/assets/about/about-hero.jpg" 
                                alt="Shelly Weasel About Photo"
                                class="sw-hero-image">
                        </div>
                        <div class="col-md-6 align-self-center">
                            <!-- <h5 class="text-center contact-title">Hi! My name is Shelly.</h5> -->
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
                            <h5>EXHIBITIONS:</h5>
                            <div class="row">
                                <div class="col-2 text-right about-date">2019</div>
                                <div class="col-10">
                                    <p>Karuna Horse Rescue Fundraiser Event – Church Ink Tattoos, Tucson AZ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 text-right about-date">2017</div>
                                <div class="col-10">
                                    <p>B.F.A. Show - University of Arizona, Tucson, AZ</p>
                                    <p>Just Ad Water - University of Arizona, Tucson, AZ</p>
                                    <p>Spring Trunk Show - Bella Starr Salon, Tucson, AZ</p>
                                    <p>Contemporary Art Show Juried Exhibition - The Duce, Phoenix, AZ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 text-right about-date">2016 </div>
                                <div class="col-10">
                                    <p>Inktober Tucson Benefit Show - Brew House, Tucson, AZ</p>
                                    <p>Summer Show - Boat House Gallery, Tucson, AZ</p>
                                    <p>Opening Doors Exhibition - University of Arizona Museum of Art, Tucson, AZ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 text-right about-date">2015</div>
                                <div class="col-10">
                                    <p>Illustration and Design Awards - University of Arizona Museum of Art, Tucson, AZ</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 text-right about-date">2014</div>
                                <div class="col-10">
                                    <p>Student Exhibition - Tucson International Airport, Tucson, AZ</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="col-12">
                            <h5>PRINT</h5>
                            <div class="row">
                                <div class="col-2 text-right about-date">2015</div>
                                <div class="col-10">
                                    <p>Race to the Bottom CD Artwork - Band Reason Will Prevail</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="col-12">
                            <h5>EDUCATION</h5>
                            <div class="row">
                                <div class="col-2 text-right about-date">2017</div>
                                <div class="col-10">
                                    <p>BFA Illustration &amp; Design, University of Arizona</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 text-right about-date">2015</div>
                                <div class="col-10">
                                    <p>Associates in Fine Arts, Pima Community College</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  beforeMount() {
    this.$nextTick(() => {
        document.documentElement.style.overflow = 'auto';
    });
  }
}
</script>

<style lang="scss">
.contact-container {
    //padding-top: 4rem;

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
                // width: 3.5rem;
                // height: 3.5rem;
                // @media (max-width: map-get($grid-breakpoints, md)) {
                    width: 2.5rem;
                    height: 2.5rem;
                // }
            }
        }
        .social-media-icon:not(:first-of-type) {
            img {
                margin-left: 1rem;
            }
        }
    }
    
    .about-date {
        font-weight: 600;
    }
}

</style>
