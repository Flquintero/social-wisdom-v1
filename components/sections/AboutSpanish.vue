<template>
  <div class="about-content">
    <h1 class="about-content__title">Sobre Nosotros</h1>
    <p class="about-content__explanation">
      En la era de la democratización del conocimiento, no toda la sabiduría se
      encuentra en artículos, blogs o motores de búsqueda. La verdadera
      experiencia, pericia e ideas a menudo residen en las mentes de aquellos
      que viven y respiran sus pasiones a diario. Social Wisdom te conecta con
      expertos cotidianos en plataformas de redes sociales para obtener
      respuestas a tus preguntas.
    </p>
    <div class="about-content__brand-values">
      <!-- <h2 class="about-content__brand-values__title">Brand Values</h2> -->
      <h3 class="about-content__brand-values__subtitle">Autenticidad</h3>
      <p class="about-content__brand-values__description">
        Creemos en interacciones auténticas. Nuestros expertos son personas
        reales con una experiencia real, listos para compartir su sabiduría
        contigo.
      </p>
      <h3 class="about-content__brand-values__subtitle">Empoderamiento</h3>
      <p class="about-content__brand-values__description">
        El conocimiento es poder. Al proporcionar acceso a expertos, capacitamos
        a las personas para tomar decisiones informadas y crecer tanto personal
        como profesionalmente.
      </p>
      <h3 class="about-content__brand-values__subtitle">Accesibilidad</h3>
      <p class="about-content__brand-values__description">
        Todo el mundo merece acceso al conocimiento experto. Nuestra plataforma
        se esfuerza por garantizar una conexión fluida entre los usuarios y los
        expertos de todo el mundo.
      </p>
      <h3 class="about-content__brand-values__subtitle">Community</h3>
      <p class="about-content__brand-values__description">
        We are building a community of continuous learning, where sharing,
        interacting, and evolving are part of the journey.
      </p>
      <h3 class="about-content__brand-values__subtitle">Comunidad</h3>
      <p class="about-content__brand-values__description">
        Mantenemos nuestra promesa de mantener canales abiertos, precios justos
        y una comunicación clara para todos los participantes de nuestra
        comunidad.
      </p>
    </div>
    <div class="about-content__contact">
      <h3>Si desea ponerse en contacto: <b>hello@socialwisdom.co</b></h3>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutSpanish",
  computed: {
    currentExpert(): string {
      return this.$route.query.account as string;
    },
  },
});
</script>
<style lang="scss" scoped>
.about-content {
  padding: 25px;
  width: 100%;
  &__title {
    text-align: center;
  }
  &__value,
  &__explanation {
    @include center-with-margin($max-width: 800px, $top: 25px, $bottom: 25px);
    font-size: 16px;
  }
  &__brand-values {
    @include center-with-margin($max-width: 800px, $bottom: 40px);
    &__title {
      text-align: center;
    }
    &__subtitle {
      text-decoration: underline;
      margin: 10px 0;
    }
  }
  &__contact {
    @include center-with-margin($max-width: 800px, $bottom: 40px);
    text-align: center;
  }
}
</style>
