<template>
  <div class="project-content">
    <h1 class="project-content__title">
      Recibe respuestas a tus preguntas en video
    </h1>
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
