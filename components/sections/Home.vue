<template>
  <div class="home-content">
    <div class="home-content__header">
      <div class="home-content__header__logo">
        <img src="/img/SWLOGO.jpeg" alt="Discover Social Wisdom" />
      </div>
      <div class="home-content__header__title">
        <!-- <h1>Social Wisdom</h1> -->
        <h3>Get your questions answered with the power of social media</h3>
      </div>
    </div>
    <div class="home-content__input">
      <BaseInput placeholder="Enter a question..." />
    </div>
    <div class="home-content__actions">
      <BaseButton button-text="Search" variant="primary" />
    </div>
  </div>
</template>
<script lang="ts">
import keyword_extractor from "keyword-extractor";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  mounted() {
    const sentence =
      "President Obama woke up Monday facing a Congressional defeat that many in both parties believed could hobble his presidency.";
    const extraction_result = keyword_extractor.extract(sentence, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false,
    });
    console.log("extraction_result", extraction_result);
  },
});
</script>
<style lang="scss" scoped>
.home-content {
  height: 100vh;
  width: 100%;
  &__header {
    @include flex-config(
      $flex-direction: column,
      $justify-content: center,
      $align-items: center
    );
    img {
      width: 350px;
      height: 177px;
    }
    &__title {
      text-align: center;
      h1 {
        font-size: 32px;
        margin-top: -35px;
      }
    }
  }
  &__input {
    @include center-with-margin($max-width: 650px, $top: 25px);
  }
  &__actions {
    @include center-with-margin($max-width: 250px, $top: 25px);
    height: 55px;
  }
}
</style>
