<template>
  <div class="results-content">
    <template v-if="isLoading">
      <div class="results-content__loading">
        <img src="~/public/img/loaderIcon.svg?inline" />
      </div>
    </template>
    <template v-else>
      <div v-if="hasSearchResults" class="results-content__header">
        <div class="results-content__header__title">
          <h2>
            These are the best social media accounts to help you find an answer:
          </h2>
        </div>
        <!-- <div class="results-content__header__question">
        <ClientOnly>
          <p>{{ currentQuestion }}</p>
        </ClientOnly>
      </div> -->
      </div>
      <div class="results-content__body">
        <template v-if="hasSearchResults">
          <div
            class="results-content__body__item"
            v-for="item in searchResults"
            :key="item.id"
          >
            <div class="results-content__body__item__image">
              <img :src="item.image" />
            </div>
            <div class="results-content__body__item__content">
              <div class="results-content__body__item__title">
                <p>{{ item.full_name }}</p>
              </div>
              <div class="results-content__body__item__social">
                <div class="results-content__body__item__social__icon">
                  <img src="/img/IGlogo.png" />
                </div>
                <div class="results-content__body__item__social__info">
                  <p class="results-content__body__item__social__info__handle">
                    {{ item.instagram_handle }}
                  </p>
                  <p
                    class="results-content__body__item__social__info__followers"
                  >
                    {{ item.instagram_followers }} followers
                  </p>
                </div>
                <div class="results-content__body__item__social__link">
                  <a
                    :href="`https://www.instagram.com/${item.instagram_handle}/?hl='en'`"
                    target="none"
                    >🔗</a
                  >
                </div>
              </div>
              <div class="results-content__body__item__description">
                <div v-html="item.description"></div>
                <div class="results-content__body__item__badges"></div>
              </div>
              <div class="results-content__body__item__button">
                <BaseButton
                  @click.prevent="chooseExpert(item)"
                  :button-text="`👋 Ask Question`"
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="results-content__body--empty">
            <h1>😥</h1>
            <h1>
              Seems like we haven't socially sourced the suggestions for this.
            </h1>
            <h3>
              We have noted your search and added it to
              <NuxtLink>The SW Project</NuxtLink>
            </h3>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import mixpanel from "mixpanel-browser";
// import algoliasearch from "algoliasearch";
import { defineComponent } from "vue";
// const client = algoliasearch("LRR1BTFAV0", "0f2d062a2251b655532eb229db247a9b");
// const index = client.initIndex("Social Media Domain Experts");

export default defineComponent({
  name: "Results",
  data() {
    return {
      searchResults: null as any,
      isLoading: true,
    };
  },
  computed: {
    currentQuestion() {
      return localStorage.getItem("CurrentQuestion");
    },
    hasSearchResults() {
      return !!this.searchResults?.length;
    },
  },
  mounted() {
    this.performSearch();
  },
  methods: {
    async performSearch() {
      try {
        this.isLoading = true;
        const searchKeywords = this.$route.query.q as string;
        if (!searchKeywords) return;
        const { hits } = await $fetch("/api/search", {
          method: "post",
          body: { searchKeywords },
        });
        this.searchResults = hits;
        mixpanel.track("Performed Search", {
          keywords: searchKeywords,
          results: hits,
        });
      } catch (error: any) {
        console.log("error", error);
      } finally {
        this.isLoading = false;
      }
    },
    chooseExpert(item: any) {
      mixpanel.track("Expert Chosen", {
        expert: item,
      });
      this.$router.push({
        name: "details",
        query: { q: this.$route.query.q, account: item.name },
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.results-content {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__loading {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__header {
    text-align: center;
    // &__title {
    //   margin-bottom: 25px;
    // }
    &__question {
      font-size: 18px;
    }
  }
  &__body {
    margin: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &--empty {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      h3 {
        margin-top: 10px;
      }
    }
    &__item {
      margin: 20px;
      border: 1px solid $border;
      border-radius: 8px;
      @include box-shadow;
      min-width: 250px;
      max-width: 250px;
      &__content {
        padding: 10px;
      }
      &__image {
        @include flex-config($justify-content: center, $align-items: center);
        padding: 10px 20px 5px;
        img {
          border: 1px solid $border;
          border-radius: 100%;
        }
      }
      &__title {
        font-size: 20px;
        text-align: center;
        font-weight: 600;
      }
      &__social {
        margin: 10px 0;
        @include flex-config();
        background: #f9f9f9;
        border-radius: 8px;
        padding: 10px 0;
        &__icon {
          width: 40px;
          @include flex-config($justify-content: center, $align-items: center);
          img {
            height: 25px;
            width: 25px;
          }
        }
        &__info {
          flex-grow: 1;
          @include flex-config($flex-direction: column);
          &__handle {
            font-size: 14px;
            font-weight: 500;
          }
          &__followers {
            font-size: 12px;
            font-weight: 200;
          }
        }
        &__link {
          width: 45px;
          @include flex-config($justify-content: center, $align-items: center);
          a {
            text-decoration: none;
          }
        }
      }
      &__description {
        div {
          margin: 20px 0;
          font-size: 12px;
        }
      }
      &__button {
        height: 40px;
        cursor: pointer;
      }
    }
  }
}
</style>
