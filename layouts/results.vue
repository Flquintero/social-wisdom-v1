<template>
  <div class="default-layout">
    <LayoutHeader link-logo to="/" />
    <slot />
  </div>
</template>
<style lang="scss">
.default-layout {
  height: 100%;
  width: 100%;
}
</style>
