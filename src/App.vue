<script>
import AppHeader from './components/AppHeader.vue';
const apiUrl = 'http://localhost:8000';
export default {
  name: 'App',
  components: { AppHeader },
  data: () => ({
    projects: []
  }),
  methods: {
    fetchProjects() {
      axios.get('')
    }
  }
};
</script>

<template>
  <app-header></app-header>
  <main class="container">

  </main>
</template>

<style></style>