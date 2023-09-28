<template>
  <div class="confirmation-content">
    <div class="confirmation-content__header">
      <h2>We will work on your request! ❤️</h2>
      <h3>{{ currentExpert }} is not on the platform yet!</h3>
      <h3>But with your help we can get them on, and that way help others!</h3>
    </div>
    <div class="confirmation-content__bid">
      <h2>
        We believe that if you offer to pay for the answer, we can get them to
        send you a video with it.
      </h2>
    </div>
    <div class="confirmation-content__form"></div>
    <div class="confirmation-content__actions"></div>
  </div>
</template>
<script lang="ts">
import algoliasearch from "algoliasearch";
import { defineComponent } from "vue";
const client = algoliasearch("LRR1BTFAV0", "0f2d062a2251b655532eb229db247a9b");
const index = client.initIndex("Social Media Domain Experts");

export default defineComponent({
  name: "Confirmation",
  data() {
    return {
      searchResults: null as any,
    };
  },
  computed: {
    currentQuestion() {
      return localStorage.getItem("CurrentQuestion");
    },
    currentExpert(): string {
      return this.$route.query.account as string;
    },
  },
  mounted() {
    this.performSearch();
  },
  methods: {
    performSearch() {
      console.log(this.$route.query);
      //   const searchKeywords = this.$route.query.q as string;
      //   index
      //     .search(searchKeywords, {
      //       removeWordsIfNoResults: "allOptional",
      //     })
      //     .then(({ hits }) => {
      //       this.searchResults = hits;
      //     });
    },
  },
});
</script>
<style lang="scss" scoped>
.confirmation-content {
  &__header {
    text-align: center;
  }
  &__bid {
    text-align: center;
    margin: 30px 0;
  }
}
</style>
