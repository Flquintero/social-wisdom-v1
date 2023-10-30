<template>
  <div class="database-filter">
    <div class="database-filter__categories">
      <BasePill
        v-for="category in mainCategories"
        :is-active="category === currentMainCategory"
        :text-content="category"
        :key="category"
        @click="setCurrentMainCategory(category)"
      />
    </div>
    <div class="database-filter__divider"></div>
    <div class="database-filter__results">
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
  name: "DatabaseFilter",
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
.database-filter {
  padding: 25px;
  &__categories {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__divider {
    height: 2px;
    background-color: black;
    max-width: 20px;
    margin: 10px auto;
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
