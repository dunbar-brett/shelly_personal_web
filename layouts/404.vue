<template>
  <main class="container">
    <div class="row">
        <aside class="col-md-6 col-sm-12">
            <h1 class="text-center error-header">Sorry we couldn't find this page.</h1>
        </aside>
        <aside class="col-md-6 col-sm-12">
            <img src="@/assets/shared/error-image.jpg" class="error-image" alt="">
        </aside>
    </div>
  </main>
</template>

<script>

export default {
  beforeMount() {
      document.documentElement.style.overflowY = 'auto';
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.error-image {
    width: 100%;
  vertical-align: middle;
  border-radius: 50%;
}
.error-header {
    font-size: 5rem !important;
}

// this is probably really bad
body.bad-hack {
    overflow-y: auto;
}
</style>
