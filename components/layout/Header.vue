<template>
  <div class="header-layout">
    <div class="header-layout__logo">
      <BaseLinkLogo v-if="linkLogo" v-bind="{ to }" />
      <BaseLogo v-else />
    </div>
    <div v-if="actions" class="header-layout__menu">
      <BaseButton
        @click="$router.push('/')"
        :button-text="`😊 New Question`"
        variant="primary"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  props: {
    actions: { type: Boolean, default: true },
    linkLogo: { type: Boolean, default: false },
    to: String,
  },
});
</script>
<style lang="scss" scoped>
.header-layout {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  &__logo {
    padding: 10px;
    width: 150px;
    display: flex;
  }
  &__menu {
    width: 200px;
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
