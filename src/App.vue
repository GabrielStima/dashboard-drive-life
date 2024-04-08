<script setup>
import { RouterView } from 'vue-router'
import SidebarComponent from './components/SidebarComponent.vue'
</script>

<template>
  <SidebarComponent />
  <main>
    <RouterView />
  </main>
</template>

<style>
#app {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
main {
  width: 100%;
  height: 100%;
}
</style>
