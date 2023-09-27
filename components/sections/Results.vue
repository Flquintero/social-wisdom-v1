<template>
  <div class="results-content">
    <div class="results-content__header">
      <div class="results-content__header__title">
        <h2>These are the best social media accounts to help you answer:</h2>
      </div>
      <div class="results-content__header__question">
        <ClientOnly>
          <p>{{ currentQuestion }}</p>
        </ClientOnly>
      </div>
    </div>
    <div class="results-content__body">
      <div
        class="results-content__item"
        v-for="item in searchResults"
        :key="item.id"
      >
        <img src="/img/creator.jpg" />
        <p>{{ item.name }}</p>
        <p>Mom, Coach</p>
        <p>@ig 3000 followers</p>
        <p>@tiktok 3000 followers</p>
        <p>@twitter 3000 followers</p>
        <p>@youtube 3000 followers</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import algoliasearch from "algoliasearch";
import { defineComponent } from "vue";
const client = algoliasearch("LRR1BTFAV0", "0f2d062a2251b655532eb229db247a9b");
const index = client.initIndex("Social Media Domain Experts");

export default defineComponent({
  name: "Results",
  data() {
    return {
      searchResults: null as any,
    };
  },
  computed: {
    currentQuestion() {
      return localStorage.getItem("CurrentQuestion");
    },
  },
  mounted() {
    this.performSearch();
  },
  methods: {
    performSearch() {
      const searchKeywords = this.$route.query.q as string;
      index
        .search(searchKeywords, {
          removeWordsIfNoResults: "allOptional",
        })
        .then(({ hits }) => {
          this.searchResults = hits;
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
  padding-top: 100px;
  flex-direction: column;
  &__header {
    text-align: center;
    &__title {
      margin-bottom: 25px;
    }
    &__question {
      font-size: 18px;
    }
  }
  &__body {
    margin: 50px;
    display: flex;
    justify-content: center;
  }
  &__item {
    margin: 20px;
    cursor: pointer;
    img {
      width: 100%;
      border-radius: 100%;
    }
  }
}
</style>
