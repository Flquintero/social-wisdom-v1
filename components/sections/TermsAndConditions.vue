<template>
  <div class="terms-and-conditions-content">
    <h1>Terms And Conditions</h1>
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
