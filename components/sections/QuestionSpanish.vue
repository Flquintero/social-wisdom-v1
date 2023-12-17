<template>
  <div class="question-section">
    <div class="question-section__content">
      <h1>¿Tienes una pregunta?</h1>
      <h3>
        Escoje un tema y escribe tu pregunta, te ensenaremos las cuentas en
        redes sociales recomendas para ayudarte
      </h3>
      <FunctionalQuestionBox>
        <template #extra-fields>
          <DropdownMenuIndex
            @option-selected="setTopic($event)"
            v-bind="{
              placeholder: 'Escoje un tema',
              chosenLabel: 'Tema',
              chosenOption: chosenTopic,
              options: subCategories,
            }"
          />
        </template>
      </FunctionalQuestionBox>
    </div>
  </div>
</template>
<script lang="ts">
import { subCategories } from "@/data/subCategories";
definePageMeta({ layout: "results" });
export default defineComponent({
  name: "QuestionSpanish",
  data() {
    return {
      chosenTopic: null,
      subCategories,
    };
  },
  methods: {
    setTopic(topic: any) {
      this.chosenTopic = topic;
    },
  },
});
</script>
<style lang="scss">
.question-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  padding: 20px;
  @include mobile {
    margin: 40px 0 0;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      margin: 10px 0 20px;
      text-align: center;
    }
    .dropdown {
      width: 100%;
      @include box-shadow;
    }
    .question-box-content__question__content {
      width: 600px;
      margin: 20px 0;
      @include mobile {
        width: 350px;
      }
    }
  }
}
</style>
