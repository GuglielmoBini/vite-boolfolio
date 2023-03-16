<script>
import axios from 'axios';
import ProjectsList from '../components/projects/ProjectsList.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'HomePage',
    components: { ProjectsList },
    data: () => ({
        projects: []
    }),
    methods: {
        fetchProjects() {
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = res.data;
            });
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <projects-list :projects="projects"></projects-list>
</template>

<style></style>