<template>
  <div class="default-layout">
    <LayoutHeader link-logo to="/" />
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
