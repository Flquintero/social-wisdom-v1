<template>
  <div class="hero-content">
    <div class="hero-content__text">
      <div class="hero-content__text__content">
        <h1>
          Recibe respuestas a tus preguntas en video
          <span>✨</span>
        </h1>
        <h3>
          Resuelve tus dudas contactando a personas que demuestran su
          conocimiento en temas específicos en redes sociales
        </h3>
      </div>
    </div>
    <div class="hero-content__question">
      <div class="hero-content__question__content">
        <img src="/img/sabri-hero.png" alt="Discover Social Wisdom" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeroSpanish",
});
</script>
<style lang="scss" scoped>
.hero-content {
  margin: 80px 200px;
  height: 55vh;
  @include flex-config();
  @include mobile {
    height: auto;
    margin: 50px 20px 20px;
  }
  &__text,
  &__question {
    height: 100%;
    width: 50%;
    @include mobile {
      width: 100%;
      height: auto;
    }
  }
  &__text {
    @include flex-config($flex-direction: column, $justify-content: center);
    &__content {
      margin: auto;
      @include mobile {
        margin: 0 auto;
        padding: 30px 10px;
      }
      max-width: 600px;
      padding: 30px;
      h1 {
        font-size: 40px;
        @include mobile {
          font-size: 28px;
        }
      }
      h3 {
        margin-top: 10px;
        font-size: 18px;
      }
    }
  }
  &__question {
    @include flex-config($flex-direction: column, $justify-content: center);
    &__content {
      padding: 0 30px;
      display: flex;
      justify-content: center;
      .input {
        margin: 20px 0;
        max-width: 600px;
      }
      button {
        max-width: 600px;
        height: 50px;
      }
      @include mobile {
        padding: 20px;
        display: flex;
        justify-content: center;
      }
      img {
        width: 197px;
        height: 409px;
        @include mobile {
          width: 172px;
          height: 354px;
        }
      }
    }
  }
  @include mobile {
    flex-direction: column;
  }
}
</style>
