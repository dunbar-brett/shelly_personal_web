<template>
    <footer class="footer-icons bad-social-media-show-hack text-center">
        <a href="https://www.facebook.com/ShellyJ.Weasel/"
            class="social-link" target="_blank">
            <img src="@/assets/shared/social-media/Facebook.png"
                class="social-media-icon" alt/>
        </a>
        <a href="https://www.instagram.com/shelly_weasel/"
            class="social-link" target="_blank">
            <img src="@/assets/shared/social-media/Insta.png" class="social-media-icon" alt />
        </a>
        <a href="https://www.youtube.com/channel/UCE3ghabnFeqbEc3qKb6CZgw"
            class="social-link" target="_blank">
            <img src="@/assets/shared/social-media/Youtube.png"
                class="social-media-icon" alt/>
        </a>
    </footer>
</template>

<script>
// THIS IS ONLY SHOWN IN A VERY LIMITED WINDOW
export default {

}
</script>

<style lang="scss">
.footer-icons {
    padding-top: 4rem;
    margin-bottom: 2rem;
    
    .social-link {
        padding: 0 1rem;

        .social-media-icon {
            width: 3rem;
            height: 3rem;
        }
    }
}
</style>