<template>
  <div class="project-content">
    <h1 class="project-content__title">The Social Wisdom Database</h1>
    <h3 class="project-content__explanation">
      An open source project with the goal of creating a database of curated
      social media accounts, from any platform, that can answer questions for
      specific topics.
    </h3>
    <h3 class="project-content__requirement">
      <b>The only requirement is that it needs to be nominated by someone</b>.
      Imagine a friend suggesting a social media account to follow to help with
      a specific situation.
    </h3>
    <h3 class="project-content__platform">
      We are currently building out the nomination form and dashboard of topics.
      But for now you can contact us at <b>topics@socialwisdom.co</b> and submit
      a topic and one, two or more accounts that you think are domain experts.
    </h3>
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
  text-align: center;
  padding: 25px;
  width: 100%;
  &__explanation,
  &__requirement,
  &__platform {
    @include center-with-margin($max-width: 800px, $top: 40px, $bottom: 40px);
    font-size: 16px;
  }
}
</style>
