<template>
  <div class="results-content">
    <div class="results-content__header">
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
      <div
        class="results-content__body__item"
        v-for="item in searchResults"
        :key="item.id"
      >
        <div class="results-content__body__item__image">
          <img src="/img/creator.jpg" />
        </div>
        <div class="results-content__body__item__content">
          <div class="results-content__body__item__title">
            <p>{{ item.name }}</p>
          </div>
          <div class="results-content__body__item__social">
            <div class="results-content__body__item__social__icon">
              <img src="/img/IGlogo.png" />
            </div>
            <div class="results-content__body__item__social__info">
              <p class="results-content__body__item__social__info__handle">
                @saschafitness
              </p>
              <p class="results-content__body__item__social__info__followers">
                5.5M followers
              </p>
            </div>
            <div class="results-content__body__item__social__link">
              <a
                href="https://www.instagram.com/saschafitness/?hl=en"
                target="none"
                >🔗</a
              >
            </div>
          </div>
          <div class="results-content__body__item__description">
            <p>
              Fitness-Nutrition Coach CEO-Sascha Fitness Corp Book author Mamá
              Youtube: Sascha Fitness
            </p>
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
    chooseExpert(item: any) {
      this.$router.push({
        name: "confirmation",
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
        p {
          margin: 20px 0;
          font-size: 14px;
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
