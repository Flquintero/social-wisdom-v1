<template>
  <div class="home-content__wrapper">
    <div class="home-content">
      <div class="home-content__header">
        <div class="home-content__header__title">
          <h1>Expertos con presencia social esperan tus preguntas</h1>
          <h3>Estos perfiles han sido recomendados por personas como tu 👌</h3>
        </div>
      </div>
      <template v-if="isLoading">
        <div class="home-content__loading">
          <img src="~/public/img/loaderIcon.svg?inline" />
        </div>
      </template>
      <div v-else>
        <div class="home-content__featured">
          <FunctionalFeaturedItemSpanish
            v-for="item in featuredResults"
            :item="item"
            :key="item.instagram_handle"
            @item-chosen="chooseExpert($event)"
          />
        </div>
        <div class="home-content__actions">
          <BaseButton
            type="button"
            @click.prevent="$router.push({ name: 'experts' })"
            :button-text="`🔎 Ver Más`"
            variant="primary"
          />
        </div>
      </div>
    </div>
    <div class="home-content__info-helpers">
      <div class="home-content__how-to">
        <div class="home-content__how-to__title">
          <span>Como Funciona</span>
        </div>
        <div class="home-content__how-to__button">
          <div>
            <ClientOnly>
              <font-awesome-icon icon="fa-solid fa-arrow-down" />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
    <div class="home-content__steps">
      <div class="home-content__steps__item">
        <div class="home-content__steps__item__digit"><span>1</span></div>
        <div class="home-content__steps__item__text">
          <p>Escoje un experto de redes sociales.</p>
        </div>
      </div>
      <div class="home-content__steps__item">
        <div class="home-content__steps__item__digit"><span>2</span></div>
        <div class="home-content__steps__item__text">
          <p>
            Escribe la pregunta que quieres que te respondan y tus datos para
            que te la envien.
          </p>
        </div>
      </div>
      <div class="home-content__steps__item">
        <div class="home-content__steps__item__digit"><span>3</span></div>
        <div class="home-content__steps__item__text">
          <p>Recibe un video con tu respuesta.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import mixpanel from "mixpanel-browser";
import keyword_extractor from "keyword-extractor";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeSpanish",
  data() {
    return {
      isLoading: false,
      searchValue: null as any,
      searchKeywords: null as any,
      featuredResults: null as any,
      exampleQuestion: "When will my baby sleep the whole night?",
    };
  },
  created() {
    this.getFeaturedExperts();
  },
  methods: {
    async getFeaturedExperts() {
      try {
        this.isLoading = true;
        const { hits } = await $fetch("/api/featured", {
          method: "post",
        });
        this.featuredResults = hits;
      } catch (error: any) {
        console.log("error", error);
      } finally {
        this.isLoading = false;
      }
    },
    setSearchValue(searchValue: any) {
      this.searchValue = searchValue.target.value;
    },
    submitQuickSearch() {
      this.searchValue = this.exampleQuestion;
      this.submitSearch();
    },
    chooseExpert(item: any) {
      mixpanel.track("Expert Chosen", {
        expert: item,
      });
      this.$router.push({
        name: "details",
        query: { account: item.full_name },
      });
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
  @include mobile() {
    height: 100%;
  }
  @include flex-config($flex-direction: column);
  &__loading {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__featured {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @include center-with-margin($max-width: 800px, $top: 10px, $bottom: 25px);
  }
  &__banner {
    padding: 10px;
    font-size: 14px;
    background-color: $light-blue;
    @include flex-config($justify-content: center, $align-items: center);
    @include mobile {
      flex-direction: column;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      &__link {
        margin-top: 10px;
      }
    }
  }
  &__header {
    margin: 10px 20px 10px;
    @include flex-config(
      $flex-direction: column,
      $justify-content: center,
      $align-items: center
    );
    @include mobile {
      margin: 20px 20px 10px;
    }
    img {
      width: 350px;
      height: 177px;
    }
    &__title {
      text-align: center;
      h1 {
        font-size: 32px;
      }
      h3 {
        margin-top: 10px;
      }
    }
  }
  form {
    padding: 0 20px;
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
    @include flex-config($flex-direction: column, $justify-content: flex-end);
    height: 100%;
    margin-top: 50px;
    @include mobile() {
      justify-content: flex-start;
      height: auto;
    }
  }
  &__disclosure {
    display: none;
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
        text-decoration-color: $view-background;
      }
    }
  }
  &__how-to {
    @include center-with-margin($max-width: 250px);
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    &__title {
      font-size: 13px;
    }
    &__button {
      border: 1px solid $primary;
      background: $primary;
      color: $white;
      border-radius: 40px;
      width: 40px;
      height: 40px;
      margin: 10px auto;
      @include flex-config($justify-content: center, $align-items: center);
    }
  }
  &__steps {
    @include center-with-margin($max-width: 600px, $top: 20px, $bottom: 50px);
    @include mobile() {
      margin: 0 auto;
    }
    padding: 20px;
    &__item {
      @include flex-config($align-items: center);
      margin: 20px 0;
      &__digit {
        min-width: 30px;
        height: 30px;
        border: 1px solid $primary;
        background: $primary;
        color: $white;
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
