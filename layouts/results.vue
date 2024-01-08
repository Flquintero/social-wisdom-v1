<template>
  <div class="results-layout">
    <LayoutHeader link-logo to="/" />
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.results-layout {
  background: $view-background;
  padding-top: 70px;
  height: 100%;
  width: 100%;
  min-height: 100vh;
}
</style>
