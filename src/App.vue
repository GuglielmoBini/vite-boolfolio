<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { AppHeader },
};
</script>

<template>
  <app-header></app-header>
  <main class="container">
    <RouterView />
  </main>
</template>

<style></style>