<script>
export default {
    name: 'NotFoundPage'
}
</script>

<template>
    <div class="d-flex flex-column align-items-center justify-content-center">
        <h1>404 | Not Found</h1>
        <router-link class="btn btn-danger mt-3" :to="{ name: 'home' }">Torna alla Home</router-link>
    </div>
</template>

<style lang="scss" scoped>
div {
    height: calc(100vh - 56px);
}
</style>