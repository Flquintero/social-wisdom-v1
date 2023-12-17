<template>
  <div
    class="dropdown-trigger"
    :class="{ 'dropdown-trigger--active': showMenu }"
  >
    <div class="dropdown-trigger__content">
      <div v-if="!useIcon">
        <div
          v-if="chosenOption"
          :class="{
            'dropdown-trigger__content-icon--checked--selected': showMenu,
          }"
          class="dropdown-trigger__content-icon--checked"
        >
          <font-awesome-icon icon="fa-solid fa-circle-check" />
        </div>
        <div v-else class="dropdown-trigger__content-icon">
          <font-awesome-icon icon="fa-solid fa-circle" />
        </div>
      </div>
      <slot name="dropdown-trigger-content-text">
        <div class="dropdown-trigger__content-text">
          <font-awesome-icon v-if="useIcon" :icon="iconName" />
          <span v-else>{{ renderTriggerText }}</span>
        </div>
      </slot>
    </div>
    <div v-if="!useIcon">
      <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import type { PropType } from "vue";

export default defineComponent({
  name: "DropdownTrigger",
  props: {
    placeholder: String,
    chosenLabel: String,
    chosenOption: (Object as PropType<any>) || null,
    showMenu: Boolean,
    useIcon: Boolean,
    iconName: String,
  },
  computed: {
    renderTriggerText(): string {
      return (this.chosenOption?.display || this.placeholder) as string;
    },
  },
});
</script>
<style lang="scss" scoped>
.dropdown-trigger {
  height: 60px;
  padding: 20px;
  width: 100%;
  border: 1px solid $border;
  border-radius: 8px;
  @include flex-config($justify-content: space-between, $align-items: center);
  cursor: pointer;
  &--active {
    // border-color: $primary;
    // background: $primary;
    // color: $white;
  }
  &__icon {
    @include flex-config($align-items: center);
    &-chosen-label {
      font-size: 9px;
      margin: 5px;
      width: max-content;
    }
  }
  &__content {
    @include flex-config();
    position: relative;
    &-icon {
      opacity: 0.4;
      margin-right: 5px;
      &--checked {
        margin-right: 5px;
        opacity: 1;
        color: $success;
        &--selected {
          color: greenyellow;
        }
      }
    }
    &-text {
      margin: 0 5px;
      font-size: 14px;
    }
  }
}
</style>
