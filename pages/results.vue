<template>
  <div>
    <NuxtLayout>
      <SectionResults />
    </NuxtLayout>
  </div>
</template>
<script lang="ts">
import algoliasearch from "algoliasearch";
import { defineComponent } from "vue";
const client = algoliasearch("LRR1BTFAV0", "0f2d062a2251b655532eb229db247a9b");
const index = client.initIndex("Social Media Domain Experts");
definePageMeta({ layout: "results" });

export default defineComponent({
  name: "Results",
  data() {
    return {};
  },
  methods: {
    submitSearch() {
      index
        .search(this.searchKeywords, {
          removeWordsIfNoResults: "allOptional",
          hitsPerPage: 2,
        })
        .then(({ hits }) => {
          console.log(hits);
        });
    },
  },
  computed: {
    searchKeywords(): string {
      return this.$route.query.q as string;
    },
  },
});
</script>
<style lang="scss" scoped>
.home-content {
  height: 100vh;
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
  }
}
</style>
