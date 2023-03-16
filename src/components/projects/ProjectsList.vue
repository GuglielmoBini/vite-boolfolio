<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array }
}
</script>

<template>
    <section id="projects-list">
        <div v-if="projects.length">
            <project-card v-for="project in projects" :key="project.id" :project="project"></project-card>
        </div>
        <h3 v-else class="text-center">Non ci sono Progetti!</h3>
    </section>
</template>

<style></style>