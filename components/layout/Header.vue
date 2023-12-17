<template>
  <div class="header-layout">
    <div class="header-layout__logo">
      <BaseLinkLogo v-if="linkLogo" v-bind="{ to }" />
      <BaseLogo v-else />
    </div>
    <div v-if="$viewport.isLessThan('tablet')" class="header-layout__actions">
      <DropdownMenuIndex
        @option-selected="goToPage($event)"
        v-bind="{
          options: [
            { display: 'Lista de Expertos', value: 'experts' },
            { display: 'Sobre Nosotros', value: 'about' },
          ],
          useIcon: true,
          iconName: 'fa-solid fa-bars',
          leftListPosition: '-150px',
        }"
      />
    </div>
    <div v-else class="header-layout__actions">
      <div class="header-layout__link">
        <NuxtLink to="/experts">Lista de Expertos</NuxtLink>
      </div>
      <div class="header-layout__link">
        <NuxtLink to="/about">Sobre Nosotros</NuxtLink>
      </div>
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
  methods: {
    goToPage(pageObject: any) {
      this.$router.push({ name: pageObject.value });
    },
  },
});
</script>
<style lang="scss">
.header-layout {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  &__logo {
    padding: 10px;
    width: 220px;
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
  &__actions {
    display: flex;
    margin: 0 50px;
    @include mobile {
      margin: 0 10px;
      .dropdown-trigger {
        border: none;
      }
    }
  }
  &__link {
    margin: 0 20px;
  }
}
</style>
