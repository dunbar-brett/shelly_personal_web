<template>
  <main class="container contact-main">
      <section class="row contact-section text-center">
        <h5 class="col-sm-12 align-middle text-center">
            Inquires for comissions can reach me through email.
        </h5>
        <aside class="col-sm-12">
            <a href="mailto:weaselshelly@gmail.com">
                <img src="@/assets/contact/mail-icon.png" class="mail-icon" alt="email me">
            </a>
        </aside>
      </section>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.contact-main {
    padding-top: 2rem;

    .contact-section {
        .mail-icon {
            width: 7rem;
        }
    }
}
</style>