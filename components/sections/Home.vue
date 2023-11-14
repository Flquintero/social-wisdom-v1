<template>
  <div class="home-content__wrapper">
    <div class="home-content">
      <div class="home-content__banner">
        <div>
          <span
            >💡 All the social accounts that help answer your questions are
            curated by people just like you:</span
          >
        </div>
        <div class="home-content__banner__link">
          &nbsp;&nbsp;<NuxtLink to="/project">Check out the list here</NuxtLink>
        </div>
      </div>
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
          <div class="home-content__powered">
            <div class="home-content__powered__text">
              <span>Powered by</span>
            </div>
            <div class="home-content__powered__logo">
              <img src="~/public/img/Algolia-logo-blue.png" />
            </div>
          </div>
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
      </form>
      <div class="home-content__info-helpers">
        <div class="home-content__disclosure">
          <h4 class="home-content__disclosure__title">
            We are currently in beta and only support questions related to
            <b>parenting</b> like:
          </h4>
          <p
            @click="submitQuickSearch"
            class="home-content__disclosure__example"
          >
            {{ exampleQuestion }}
          </p>
        </div>
        <div class="home-content__how-to">
          <div class="home-content__how-to__title">
            <span>How it works</span>
          </div>
          <div class="home-content__how-to__button">
            <div><span>👇</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-content__steps">
      <div class="home-content__steps__item">
        <div class="home-content__steps__item__digit"><span>1</span></div>
        <div class="home-content__steps__item__text">
          <p>
            Enter a question related to a topic (we only support
            <b>parenting</b> right now).
          </p>
        </div>
      </div>
      <div class="home-content__steps__item">
        <div class="home-content__steps__item__digit"><span>2</span></div>
        <div class="home-content__steps__item__text">
          <p>
            You will get a list of social media accounts that are relevant and
            could answer that question.
          </p>
        </div>
      </div>
      <div class="home-content__steps__item">
        <div class="home-content__steps__item__digit"><span>3</span></div>
        <div class="home-content__steps__item__text">
          <p>
            Choose an an account to help with the question and enter the details
            so they send you their answer.
          </p>
        </div>
      </div>
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
  height: 100vh;
  @include flex-config($flex-direction: column);
  &__banner {
    padding: 10px;
    font-size: 14px;
    background-color: $light-blue;
    @include flex-config($justify-content: center, $align-items: center);
    @include mobile {
      flex-direction: column;
      padding: 20px;
      text-align: center;
      &__link {
        margin-top: 10px;
      }
    }
  }
  &__header {
    padding: 10px 20px;
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
  &__powered {
    margin: 5px 0;
    font-size: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__logo {
      width: 40px;
      margin: 0 5px;
    }
  }
  &__actions {
    @include center-with-margin($max-width: 250px, $top: 15px);
    height: 55px;
    padding: 5px;
  }
  &__info-helpers {
    @include flex-config(
      $flex-direction: column,
      $justify-content: space-between
    );
    height: 100%;
  }
  &__disclosure {
    padding: 10px;
    max-width: 450px;
    margin: 0 auto;
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
  &__how-to {
    @include center-with-margin($max-width: 250px, $top: 15px);
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    &__title {
      font-size: 13px;
    }
    &__button {
      border: 1px solid #d4ebff;
      border-radius: 40px;
      width: 40px;
      height: 40px;
      margin: 10px auto;
      @include flex-config($justify-content: center, $align-items: center);
    }
  }
  &__steps {
    @include center-with-margin($max-width: 600px, $top: 50px, $bottom: 50px);
    &__item {
      @include flex-config($align-items: center);
      margin: 20px 0;
      &__digit {
        min-width: 30px;
        height: 30px;
        border: 1px solid #d4ebff;
        border-radius: 40px;
        margin-right: 20px;
        @include flex-config($justify-content: center, $align-items: center);
        font-weight: 600;
        font-size: 16px;
      }
      &__text {
        font-size: 16px;
      }
    }
  }
}
</style>
