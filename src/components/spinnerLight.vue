<template>
        <img class="spinner" width="70px" src="../assets/icons/spinner 2.png" alt="">
</template>

<style scoped>

.spinner-box{
    position: absolute;
    top: 0px;
}

.spinner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: brightness(100);
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