<template>
  <div class="hero-content">
    <div class="hero-content__text">
      <div class="hero-content__text__content">
        <h1>Contacta a expertos sobre un tema en especifico</h1>
        <h3>
          Tus cuentas de redes sociales favoritas o recomendadas por gente como
          tu que te responden tus preguntas
        </h3>
      </div>
    </div>
    <div class="hero-content__question">
      <div class="hero-content__question__content">
        <h2>¿Tienes una pregunta?</h2>
        <BaseTextarea
          @input="setForm($event)"
          placeholder="Escribe tu Pregunta..."
        />
        <BaseButton
          :button-text="`🔎 Buscar Expertos`"
          :loading="false"
          variant="primary"
          :disabled="false"
        />
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
  margin-top: 80px;
  height: 65vh;
  @include flex-config();
  &__text,
  &__question {
    height: 100%;
    width: 50%;
    @include mobile {
      width: 100%;
    }
  }
  &__text {
    @include flex-config($flex-direction: column, $justify-content: center);
    &__content {
      margin: auto;
      max-width: 600px;
      padding: 30px;
      h1 {
        font-size: 40px;
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
      }
    }
  }
  @include mobile {
    flex-direction: column;
  }
}
</style>
