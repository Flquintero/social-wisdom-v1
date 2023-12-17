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
      </div>
      <div class="results-content__body">
        <template v-if="hasSearchResults">
          <FunctionalResultItem
            v-for="item in searchResults"
            :item="item"
            :key="item.id"
            @item-chosen="chooseExpert($event)"
          />
        </template>
        <template v-else>
          <div class="results-content__body--empty">
            <h1>😥</h1>
            <h1>
              Seems like we haven't socially sourced the suggestions for this.
            </h1>
            <h3>
              We have noted your search and added it to the
              <NuxtLink to="/experts">The Database</NuxtLink>
            </h3>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import mixpanel from "mixpanel-browser";
import { defineComponent } from "vue";

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
        query: { q: this.$route.query.q, account: item.full_name },
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
        cursor: pointer;
      }
    }
  }
}
</style>
