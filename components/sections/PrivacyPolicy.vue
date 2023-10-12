<template>
  <div class="privacy-policy-content">
    <div
      name="termly-embed"
      data-id="2f9e2a2d-29c7-4e63-a907-f942af27eb29"
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
.privacy-policy-content {
  text-align: center;
  margin: 0 20px;
}
</style>
