<script>
import axios from 'axios';
import ProjectsList from '../components/projects/ProjectsList.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'HomePage',
    components: { ProjectsList },
    data: () => ({
        projects: [],
        isLoading: false
    }),
    methods: {
        fetchProjects() {
            this.isLoading = true
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = res.data;
            }).catch((err) => {
                console.error(err);
            }).then(() => {
                this.isLoading = false
            });
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <AppLoader v-if="isLoading" />
    <projects-list v-else :projects="projects"></projects-list>
</template>

<style></style>