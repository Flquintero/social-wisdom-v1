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
    <form @submit.prevent="submitSearch">
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
          type="submit"
          @click.prevent="submitSearch"
          :disabled="!searchValue"
          :button-text="`🔎 Search`"
          variant="primary"
        />
      </div>
      <div class="home-content__disclosure">
        <h4 class="home-content__disclosure__title">
          We are currently in beta and only support questions related to
          <b>new parents / mothers</b> like:
        </h4>
        <p @click="submitQuickSearch" class="home-content__disclosure__example">
          {{ exampleQuestion }}
        </p>
      </div>
    </form>
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
      exampleQuestion: "When will my baby sleep the whole night?",
    };
  },
  methods: {
    setSearchValue(searchValue: any) {
      this.searchValue = searchValue.target.value;
    },
    submitQuickSearch() {
      this.searchValue = this.exampleQuestion;
      this.submitSearch();
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
  &__disclosure {
    padding: 10px;
    max-width: 450px;
    margin: auto;
    text-align: center;
    &__title {
      margin: 20px 0;
    }
    &__example {
      margin: 20px 0;
      font-size: 14px;
      cursor: pointer;
      font-style: italic;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
