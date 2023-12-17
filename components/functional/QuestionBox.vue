<template>
  <div class="question-box-content">
    <div class="question-box-content__question">
      <div class="question-box-content__question__content">
        <DropdownMenuIndex
          @option-selected="setTopic($event)"
          v-bind="{
            placeholder: 'Escoje un tema',
            chosenLabel: 'Tema',
            chosenOption: chosenTopic,
            options: subCategories,
          }"
        />
        <BaseTextarea
          @input="setSearchValue($event)"
          v-bind="{
            placeholder: 'Escribe tu pregunta...',
          }"
        />
        <BaseButton
          :button-text="`🔎 Ver Expertos`"
          variant="primary"
          :disabled="!searchValue && !chosenTopic"
          @click="submitSearch"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { subCategories } from "@/data/subCategories";
import keyword_extractor from "keyword-extractor";

export default defineComponent({
  name: "QuestionBox",
  data() {
    return {
      searchValue: null as any,
      searchKeywords: null as any,
      chosenTopic: null,
      subCategories,
    };
  },
  methods: {
    setSearchValue(searchValue: any) {
      this.searchValue = searchValue.target.value;
    },
    setTopic(topic: any) {
      this.chosenTopic = topic;
    },
    submitSearch() {
      const searchKeywordsRaw = keyword_extractor.extract(this.searchValue, {
        language: "spanish",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false,
      });
      this.searchKeywords = JSON.parse(JSON.stringify(searchKeywordsRaw));
      this.$router.push({
        name: "experts",
        query: {
          q: this.searchKeywords.join(),
          topic: JSON.stringify(this.chosenTopic),
        },
      });
      localStorage.setItem("CurrentQuestion", this.searchValue);
    },
  },
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
