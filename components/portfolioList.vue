<template>
    <div class="text-center">
        <div v-for="image in images" :key="image.id" class="image-wrapper">
            <img :src="'portfolio/' + image.filename" class="images">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            required: true,
        }
    }
}
</script>

<style lang="scss">
.image-wrapper {
    padding-bottom: 10rem;

    .images {
        max-width: 90vw;
    }
}
</style>