<template>
  <div class="project-content">
    <h1 class="project-content__title">The Social Wisdom Database</h1>
    <h3 class="project-content__explanation">
      An open source project with the goal of creating a database of curated
      social media accounts, from any platform, that can answer questions for
      specific topics.
      <b>The only requirement is that it needs to be nominated by someone</b>.
      Imagine a friend suggesting a social media account to follow to help with
      a specific situation.
    </h3>
    <SectionProjectDatabaseFilter />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Success",
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
    @include center-with-margin($max-width: 800px, $top: 40px, $bottom: 40px);
    font-size: 16px;
    text-align: center;
  }
}
</style>
