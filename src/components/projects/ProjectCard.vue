<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
    computed: {
        projectDate() {
            const date = new Date(this.project.created_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            let minutes = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;
            if (minutes < 10) minutes = '0' + minutes;

            return `${day}/${month}/${year} - ${hours}:${minutes}`;
        },

        abstract() {
            return this.project.description.slice(0, 249) + '...';
        }
    }
}
</script>

<template>
    <div class="d-flex flex-column align-items-center">
        <div class="my-5" :class="{ 'card': isDetail && project.image_url }">
            <div class="row g-0 justify-content-center">
                <div v-if="isDetail && project.image_url" class="col-4">
                    <img :src='project.image_url' class="img-fluid w-100 h-100 rounded-start" :alt='project.name'>
                </div>
                <div class="col-8" :class="{ 'card': !isDetail || !project.image_url }">
                    <div class="row g-0 h-100 flex-column">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <h3 class="card-title">{{ project.name }}</h3>
                                <router-link v-if="!isDetail" class="btn btn-outline-primary"
                                    :to="{ name: 'project-details', params: { id: project.id } }">Dettagli</router-link>
                            </div>
                            <p v-if="!isDetail" class="card-text flex-grow-1">{{ abstract }}</p>
                            <p v-else class="card-text flex-grow-1">{{ project.description }}</p>
                            <p class="card-text">
                                <small class="text-muted">
                                    <strong>Created: </strong>{{ projectDate }}
                                </small>
                            </p>
                            <p v-if="project.type" class="card-text">
                                <small class="text-muted">
                                    <strong>Type:</strong> {{ project.type.label }}
                                </small>
                            </p>
                            <ul v-if="isDetail" class="p-0 m-0">
                                <li v-if="project.technologies.length > 0" v-for="technology in project.technologies"
                                    class="badge rounded-pill me-2" :class="`bg-${technology.color}`">
                                    {{ technology.label }}
                                </li>
                                <div v-else> - </div>
                            </ul>
                        </div>
                        <div class="card-body border-top d-flex align-items-center justify-content-around">
                            <a :href='project.project_url'>Project link</a>
                            <a v-if="project.image_url" :href='project.image_url'>Image URL</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-link v-if="isDetail" class="btn btn-danger w-25" :to="{ name: 'home' }">Home</router-link>
    </div>
</template>

<style></style>