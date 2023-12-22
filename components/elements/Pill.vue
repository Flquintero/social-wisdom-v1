<template>
  <div class="pill" :class="{ 'pill--active': isActive }">
    <span>{{ textContent }}</span>
    <span v-if="isActive">
      <ClientOnly>
        <font-awesome-icon icon="fa-sharp fa-solid fa-arrow-down" />
      </ClientOnly>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pill",
  props: {
    textContent: String,
    isActive: Boolean,
  },
});
</script>
<style lang="scss" scoped>
.pill {
  background: $white;
  cursor: pointer;
  width: 150px;
  height: 30px;
  margin: 10px;
  border-radius: 50px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  &--active {
    background-color: $primary;
    color: $white;
  }
}
</style>
