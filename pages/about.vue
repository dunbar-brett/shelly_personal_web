<template>
    <div class="row sw-container">
        <div class="col">
            <div class="row">
                <div class="col-md-6">
                    <img src="@/assets/about/about-hero.jpg" 
                        alt="Shelly Weasel About Photo"
                        class="sw-hero-image">
                </div>
                <div class="col-md-6">
                    <p>
                        What about macaroni – let me finish – salad? Oh, I can just taste those meaty leading man parts in my mouth. I think that's one of Mom's little fibs, you know, like I'll sacrifice anything for my children. You just made a fool out of yourself in front of T-Bone. The CIA should've just Googled for his hideout, evidently.
    You were just a turd out there, you know? You couldn't kick, and you couldn't run, you know? You were just a turd. Speaking of settling, How's Ann? It's a jetpack, Michael. What could go wrong? If you didn't have adult onset diabetes, I wouldn't mind giving you a little sugar.
    What have we always said is the most important thing? How do you know Steve Holt? Are you in AA? Chickens don't clap!
    You stay on top of her Buddy. Don't be afraid to ride her. Hard. Sure, let the little fruit do it. HUZZAH! GENE!! [screams]
    If this tableau I recreate, perhaps I can re-snare my mate. It walked on my pillow!
    They frame my junk. You go buy a tape recorder and record yourself for a whole day. I think you'll be surprised at some of your phrasing. She's always got to wedge herself in the middle of us so that she can control everything. Yeah. Mom's awesome. Tobias is Queen Mary. No, I was ashamed to be SEEN with you. I like being WITH you. [Stabbing Gob] White power! Gob: I'm white! Wine only turns to alcohol if you let it sit. We need a name. Maybe "Operation Hot Mother." No, let's try to top that. (They never did.)
                    </p>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12">
                    <h1>EXHB</h1>
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
.sw-container {
    .sw-hero-image {
        max-width: 100%;
    }
}

</style>
