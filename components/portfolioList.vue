<template>
    <div class="portfolio-list">
        <div class="text-center">
            <figure v-for="image in images" :key="image.id" class="image-wrapper">
                <img :src="'portfolio/' + image.filename" class="images">
                <figcaption class="fig-caption">
                    <p class="image-caption">{{image.title}}</p>
                    <p class="image-caption">{{image.description}}</p>
                </figcaption>
            </figure>
        </div>
        <div>
            <button id="back-to-top" class="back-to-top-btn" @click="backToTop">
                <img class="chevron" src="@/assets/shared/chevron.png" alt="">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            required: true,
        }
    },
    methods: {
        handleScroll() {
            var button = document.getElementById('back-to-top');
            if (window.scrollY > 300) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        },
        backToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    },
    created () {
        if (process.browser) { 
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed () {
        if (process.browser) { 
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
}
</script>

<style lang="scss">
.portfolio-list {
    .image-wrapper {
        padding-bottom: 2rem;
    
        .images {
            max-width: 90vw;
        }

        .fig-caption {
            padding-top: 1rem;
        }
    }

    .back-to-top-btn {
        display: none;
        position: fixed;
        bottom: 2.5rem;
        right: 30px;
        z-index: 99;
        font-size: 18px;
        border: none;
        outline: none;
        background-color: $sw-light-blue;
        cursor: pointer;
        border-radius: 30px;
        padding: 0;
        width: 3rem;

        .chevron {
            width: 3rem;
            transform: rotate(90deg);
        }
    }
}
</style>