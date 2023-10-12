<template>
  <div class="terms-and-conditions-content">
    <div
      name="termly-embed"
      data-id="ec534090-f04d-402e-b186-88ba7ca5a041"
    ></div>
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
.terms-and-conditions-content {
  text-align: center;
  margin: 20px;
}
</style>
