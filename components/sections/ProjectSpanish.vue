<template>
  <div class="project-content">
    <h1 class="project-content__title">
      Cuentas de redes sociales de expertos listos para ayudar
    </h1>
    <h3 class="project-content__subtitle">
      Escoge un tema en especifico para ver las opciones
    </h3>
    <SectionProjectDatabaseFilterSpanish />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectSpanish",
  computed: {
    currentExpert(): string {
      return this.$route.query.account as string;
    },
  },
});
</script>
<style lang="scss" scoped>
.project-content {
  padding: 25px;
  width: 100%;
  &__title {
    text-align: center;
  }
  &__subtitle {
    text-align: center;
    margin-top: 10px;
  }
  &__explanation,
  &__requirement,
  &__platform {
    @include center-with-margin($max-width: 800px, $top: 40px, $bottom: 10px);
    font-size: 16px;
    text-align: center;
  }
  &__nominate {
    @include center-with-margin($max-width: 400px, $top: 30px, $bottom: 10px);
  }
}
</style>
