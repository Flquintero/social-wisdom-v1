<template>
  <div class="dropdown">
    <DropdownMenuTrigger
      v-bind="{
        placeholder,
        chosenLabel,
        chosenOption,
        showMenu,
        useIcon,
        iconName,
        triggerBackground,
      }"
      @click="toggleMenu"
    />
    <DropdownMenuList
      v-if="showMenu"
      v-bind="{ options, leftListPosition }"
      @option-selected="setChosenOption($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "DropdownMenu",
  props: {
    placeholder: String,
    chosenLabel: String,
    chosenOption: (Object as PropType<any>) || null,
    options: Array as PropType<any>,
    useIcon: Boolean,
    iconName: String,
    leftListPosition: String,
    triggerBackground: String,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    setChosenOption(option: any) {
      this.$emit("option-selected", option);
      this.showMenu = false;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      if (this.showMenu) {
        this.showMenu = false;
      }
    },
  },
  computed: {
    renderTriggerText(): string {
      return (this.chosenOption?.text || this.placeholder) as string;
    },
  },
});
</script>
<style lang="scss" scoped>
.dropdown {
  position: relative;
  border-radius: $border-radius;
}
</style>
