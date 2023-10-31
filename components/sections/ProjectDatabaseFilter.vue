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
    <div class="database-filter__subcategories">
      <BasePill
        v-for="subCategory in subCategories"
        :is-active="subCategory === currentSubCategory"
        :text-content="subCategory"
        :key="subCategory"
        @click="setCurrentSubCategory(subCategory)"
      />
    </div>
    <div class="database-filter__results">
      <FunctionalResultItem
        v-for="item in searchResults"
        :item="item"
        :key="item.instagram_handle"
        @item-chosen="chooseExpert($event)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import mixpanel from "mixpanel-browser";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DatabaseFilter",
  data: () => {
    return {
      isLoading: false,
      searchResults: null as null | any,
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
    this.setCurrentMainCategory(this.mainCategories[0]);
    this.setCurrentSubCategory(this.subCategories[0]);
  },
  methods: {
    setCurrentMainCategory(category: string) {
      this.currentMainCategory = category;
    },
    async setCurrentSubCategory(subCategory: string) {
      this.currentSubCategory = subCategory;
      try {
        this.isLoading = true;
        const { hits } = await $fetch("/api/filter", {
          method: "post",
          body: { subCategory },
        });
        this.searchResults = hits;
        mixpanel.track("Performed Filter", {
          keywords: subCategory,
          results: hits,
        });
      } catch (error: any) {
        console.log("error", error);
      } finally {
        this.isLoading = false;
      }
    },
    chooseExpert(item: any) {
      mixpanel.track("Expert Chosen", {
        expert: item,
      });
      this.$router.push({
        name: "details",
        query: { account: item.full_name },
      });
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
    @include mobile {
      .pill {
        font-size: 11px;
        width: 100px;
      }
    }
  }
  &__divider {
    height: 2px;
    background-color: black;
    max-width: 20px;
    margin: 10px auto;
  }
  &__subcategories {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @include center-with-margin($max-width: 1200px, $top: 10px, $bottom: 25px);
    @include mobile {
      .pill {
        font-size: 11px;
        width: 100px;
      }
    }
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
