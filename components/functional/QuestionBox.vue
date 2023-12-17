<template>
  <div class="question-box-content">
    <div class="question-box-content__question">
      <div class="question-box-content__question__content">
        <slot name="extra-fields" />
        <BaseTextarea
          @input="setForm($event)"
          placeholder="Escribe tu pregunta..."
        />
        <BaseButton
          :button-text="`🔎 Ver Expertos`"
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
  name: "QuestionBox",
});
</script>
<style lang="scss" scoped>
.question-box-content {
  @include flex-config();
  &__question {
    height: 100%;
    width: 50%;
    @include mobile {
      width: 100%;
    }
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
      img {
        height: 479px;
        width: 564px;
        @include mobile {
          height: 300px;
          width: 353px;
        }
      }
    }
  }
}
</style>
