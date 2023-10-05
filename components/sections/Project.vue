<template>
  <div class="project-content">
    <h1>SW Project</h1>
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
  margin: 20px;
}
</style>
