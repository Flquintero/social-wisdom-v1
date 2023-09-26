<template>
  <div class="default-layout">
    <slot />
    <LayoutFooter />
  </div>
</template>
<style lang="scss">
.default-layout {
  background-color: $view-background-color;
  height: 100vh;
  width: 100vw;
}
</style>
