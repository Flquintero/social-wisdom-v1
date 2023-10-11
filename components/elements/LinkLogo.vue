<template>
  <NuxtLink class="link-logo" :to="to"><BaseLogo /></NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LinkLogo",
  props: {
    to: String,
  },
});
</script>
<style lang="scss" scoped>
.link-logo {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
