<template>
  <div class="home-content">
    <div class="home-content__header">
      <div class="home-content__header__logo">
        <BaseLogo />
      </div>
      <div class="home-content__header__title">
        <!-- <h1>Social Wisdom</h1> -->
        <h3>Get your questions answered with the power of social media</h3>
      </div>
    </div>
    <div class="home-content__input">
      <BaseInput
        @input="setSearchValue($event)"
        v-bind="{
          placeholder: 'Enter a question...',
          value: searchValue,
        }"
      />
    </div>
    <div class="home-content__actions">
      <BaseButton
        @click.prevent="submitSearch"
        :disabled="!searchValue"
        :button-text="`🔎 Search`"
        variant="primary"
      />
    </div>
  </div>
</template>
<script lang="ts">
import keyword_extractor from "keyword-extractor";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      searchValue: null as any,
      searchKeywords: null as any,
    };
  },
  methods: {
    setSearchValue(searchValue: any) {
      this.searchValue = searchValue.target.value;
    },
    submitSearch() {
      const searchKeywordsRaw = keyword_extractor.extract(this.searchValue, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false,
      });
      this.searchKeywords = JSON.parse(JSON.stringify(searchKeywordsRaw));
      this.$router.push({
        name: "results",
        query: { q: this.searchKeywords.join() },
      });
      localStorage.setItem("CurrentQuestion", this.searchValue);
    },
  },
});
</script>
<style lang="scss" scoped>
.home-content {
  height: 100%;
  width: 100%;
  padding: 10px 20px;
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
    padding: 5px;
  }
}
</style>
