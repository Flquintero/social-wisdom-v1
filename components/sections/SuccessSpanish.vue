<template>
  <div class="confirmation-content">
    <h1>❤️</h1>
    <h1 class="confirmation-content__title">Muchisimas Gracias!</h1>
    <h3 class="confirmation-content__subtitle">
      Nos pondremos manos a la obra para obtener esa respuesta para ti de
      {{ currentExpert }}!
    </h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SuccessSpanish",
  computed: {
    currentExpert(): string {
      return this.$route.query.account as string;
    },
  },
});
</script>
<style lang="scss" scoped>
.confirmation-content {
  text-align: center;
  margin: 20px;
  &__title {
    margin-bottom: 20px;
  }
  &__subtitle {
    font-size: 20px;
  }
}
</style>
