<template>
  <div class="default-layout">
    <slot />
    <LayoutFooter />
  </div>
</template>
<style lang="scss">
.default-layout {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
