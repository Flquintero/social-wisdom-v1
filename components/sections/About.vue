<template>
  <div class="about-content">
    <h1 class="about-content__title">About us</h1>
    <!-- <p class="about-content__value">
      Wisdom lies beyond search engines. Connect directly with renowned experts
      and personalities from social media. Get answers that are tailored,
      trustworthy, and transformative. Don’t just search - connect.
    </p> -->
    <p class="about-content__explanation">
      In the era of knowledge democratization, not all wisdom is found in
      articles, blogs, or search engines. Real expertise, experience, and
      insights often lie within the minds of those who live and breathe their
      passions every day. Social Wisdom connects you with the day-to-day experts
      in social media platforms to get your questions answered.
    </p>
    <div class="about-content__brand-values">
      <!-- <h2 class="about-content__brand-values__title">Brand Values</h2> -->
      <h3 class="about-content__brand-values__subtitle">Authenticity</h3>
      <p class="about-content__brand-values__description">
        We believe in genuine interactions. Our experts are real people with
        real expertise, ready to share their wisdom with you.
      </p>
      <h3 class="about-content__brand-values__subtitle">Empowerment</h3>
      <p class="about-content__brand-values__description">
        Knowledge is power. By providing access to experts, we empower
        individuals to make informed decisions and grow personally and
        professionally.
      </p>
      <h3 class="about-content__brand-values__subtitle">Accessibility</h3>
      <p class="about-content__brand-values__description">
        Everyone deserves access to expert knowledge. Our platform strives to
        ensure a seamless connection between users and experts across the globe.
      </p>
      <h3 class="about-content__brand-values__subtitle">Community</h3>
      <p class="about-content__brand-values__description">
        We are building a community of continuous learning, where sharing,
        interacting, and evolving are part of the journey.
      </p>
      <h3 class="about-content__brand-values__subtitle">Transparency</h3>
      <p class="about-content__brand-values__description">
        We stand by our promise to maintain open channels, fair pricing, and
        clear communication for all stakeholders of our community.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Success",
  computed: {
    currentExpert(): string {
      return this.$route.query.account as string;
    },
  },
});
</script>
<style lang="scss" scoped>
.about-content {
  padding: 25px;
  width: 100%;
  &__title {
    text-align: center;
  }
  &__value,
  &__explanation {
    @include center-with-margin($max-width: 800px, $top: 25px, $bottom: 25px);
    font-size: 16px;
  }
  &__brand-values {
    @include center-with-margin($max-width: 800px, $bottom: 40px);
    &__title {
      text-align: center;
    }
    &__subtitle {
      text-decoration: underline;
      margin: 10px 0;
    }
  }
}
</style>
