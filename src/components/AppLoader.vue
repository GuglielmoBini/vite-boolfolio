<script>
export default {
    name: 'AppLoader',
}
</script>

<template>
    <div class="loader-overlay d-flex flex-column">
        <i class="fa-solid fa-spinner fa-spin fa-6x mb-3 text-white"></i>
        <h2>Loading...</h2>
    </div>
</template>

<style lang="scss" scoped>
.loader-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.4);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}
</style>