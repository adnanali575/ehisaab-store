<template>
    <div>
        <img class="spinner" width="70px" src="../assets/icons/spinner 2.png" alt="">
    </div>
</template>

<style scoped>

.spinner{
    animation: spin 2s infinite linear;
}


@keyframes spin {
    0%{
        transform: rotate(0deg);
    }

    100%{
        transform: rotate(360deg);
    }
}

</style>