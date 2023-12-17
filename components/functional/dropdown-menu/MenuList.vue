<template>
  <div class="dropdown-list" :style="{ left: leftListPosition }">
    <slot name="dropdown-list-content">
      <div
        class="dropdown-list__item"
        v-for="(option, index) in options"
        :key="`${option.value}-${index}`"
        @click="setChosenOption(option)"
      >
        <span>{{ option.display }}</span>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import type { PropType } from "vue";

export default defineComponent({
  name: "DropdownList",
  props: {
    options: Array as PropType<any[]>,
    leftListPosition: {
      type: String,
      default: "0",
    },
  },
  methods: {
    setChosenOption(option: any) {
      this.$emit("option-selected", option);
    },
  },
});
</script>
<style lang="scss" scoped>
.dropdown-list {
  position: absolute;
  top: 70px;
  border: 1px solid $border;
  @include box-shadow;
  border-radius: 8px;
  width: auto;
  min-width: 200px;
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  background: $white;
  z-index: 200;

  &__item {
    margin: 10px 10px 20px;
    cursor: pointer;
  }
}
</style>
