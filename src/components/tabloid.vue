<template>
    <div v-if="$store.state.tabloidShow" class="pop-up-cover">
        <div v-on:click="showTabloid" class="pop-up-bg">
        </div>

        <div class="pop-up">
            <div class="img-section">
                <img src="../assets/images/Banner.jpg" alt="">
            </div>
            <div class="text">
                <h1>Thank you</h1>
                <p>Jamal Garments will contact you see for confrimation </p>
                <button>Continue Shopping</button>
            </div>
        </div>

    </div>
</template>


<script>


export default {

    props: {
    },
    data() {
        return {
        }
    },
    methods: {
        showTabloid: function(){
            this.$store.dispatch('showTabloid')
        }
    },
    computed: {

    },
    mounted() {
    }
}


</script>


<style scoped>
.pop-up-cover {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
}

.pop-up-bg {
    background-color: rgba(0, 0, 0, 0.664);
    backdrop-filter: blur(7px);
    width: 100%;
    height: 100%;
}

.pop-up {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 792px;
    height: 600px;
    display: flex;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: animate 0.5s normal;
}

@keyframes animate {

    0% {
        transform: translate(-50%, -50%) scale(0);
    }
    
    70% {
        transform: translate(-50%, -50%) scale(1.1);
    }

    100% {
        transform: translate(-50%, -50%) scale(1);
    }

}

.img-section {
    width: 100%;
    overflow: hidden;
}

.img-section img {
    width: 100%;
    margin-top: -2px;
}

.text{
    overflow: hidden;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
}

.pop-up h1 {
    margin: 20px 0px;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px
}

.pop-up p {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
}

.pop-up button {
    margin: 20px 0px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    background: #3E8AAD;
    width: 397px;
    height: 61px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.pop-up button:hover {
    transform: scale(1.02);
}

.pop-up button:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
}
</style>