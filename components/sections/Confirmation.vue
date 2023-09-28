<template>
  <div class="confirmation-content">
    <div class="confirmation-content__header">
      <!-- <h1>We will work on your request! ❤️</h1> -->
      <h3>{{ currentExpert }} is not on the platform yet!</h3>
      <h3>
        But with your help we can get them on, and that way help others! ❤️
      </h3>
    </div>
    <div class="confirmation-content__bid">
      <h1 class="confirmation-content__bid__title">
        We believe that if you offer to pay for the answer, we can get them to
        send you a video with it.
      </h1>
      <div class="confirmation-content__bid__form">
        <h3>If so, how much would you be willing to pay?</h3>
        <div class="confirmation-content__bid__form__input">
          💲&nbsp;&nbsp;<BaseInput
            @input="setAmount($event)"
            v-bind="{ placeholder: 'Enter Amount...', type: 'number' }"
          />
        </div>
      </div>
    </div>
    <div class="confirmation-content__details">
      <h3>
        Also, we would need your info, to send you the answer (nothing else):
      </h3>
      <div class="confirmation-content__details__form">
        <BaseInput v-bind="{ placeholder: 'Name', type: 'text' }" />
        <BaseInput v-bind="{ placeholder: 'Email', type: 'text' }" />
      </div>
    </div>
    <div class="confirmation-content__actions">
      <BaseButton button-text="Get Me The Answer! 💪" variant="primary" />
    </div>
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
  padding: 20px;
  &__header {
    text-align: center;
  }
  &__bid {
    text-align: center;
    margin: 30px 0;
    &__title {
      width: 100%;
      max-width: 800px;
      margin: auto;
    }
    &__form {
      margin-top: 30px;

      &__input {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }
    }
  }
  &__details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    &__form {
      margin-top: 20px;
      width: 100%;
      max-width: 400px;
      div {
        margin-bottom: 15px;
      }
    }
  }
  &__actions {
    width: 100%;
    max-width: 250px;
    height: 35px;
    margin: 10px auto;
  }
}
</style>
