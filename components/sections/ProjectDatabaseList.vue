<template>
  <div class="database-list">
    <div class="database-list__categories">
      <BasePill
        v-for="category in mainCategories"
        :is-active="category === currentMainCategory"
        :text-content="category"
        :key="category"
        @click="setCurrentMainCategory(category)"
      />
    </div>
    <div class="database-list__results">
      <BasePill
        v-for="subCategory in subCategories"
        :is-active="subCategory === currentSubCategory"
        :text-content="subCategory"
        :key="subCategory"
        @click="setCurrentSubCategory(subCategory)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DatabaseList",
  data: () => {
    return {
      currentMainCategory: null as null | string,
      currentSubCategory: null as null | string,
      mainCategories: ["parenting"], // abstract it
      subCategories: [
        "breastfeeding",
        "entertainment",
        "motherhood",
        "nutrition",
        "parenthood",
        "pediatric",
        "physiotherapy",
        "pregnancy",
        "psicology",
        "sleep",
        "speech",
        "wellness",
      ],
    };
  },
  created() {
    this.currentMainCategory = this.mainCategories[0];
    this.currentSubCategory = this.subCategories[0];
  },
  methods: {
    setCurrentMainCategory(category: string) {
      this.currentMainCategory = category;
    },
    setCurrentSubCategory(subCategory: string) {
      this.currentSubCategory = subCategory;
    },
  },
});
</script>
<style lang="scss" scoped>
.database-list {
  padding: 25px;
  &__categories {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__results {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @include center-with-margin($max-width: 1200px, $top: 10px, $bottom: 25px);
  }
}
</style>
