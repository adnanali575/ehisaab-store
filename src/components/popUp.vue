<template>
    <div v-if="$store.state.popUpShow" class="pop-up-cover">
        <div v-on:click="hidePopUp" class="pop-up-bg">
        </div>
        
        <spinner v-if="$store.state.popUpPreLoader"></spinner>
        
        <div v-if="!$store.state.popUpPreLoader" class="pop-up">
            
            <div class="product-image">
                <img v-for="(image, index) in singleProduct.images" :key="index" class="img" :src="image" alt="">
            </div>

            <div class="info">
                <div class="top-info">
                    <img class="bussiness-logo" src="../assets/images/Bussiness logo.png" alt="">
                    <div class="store-info">
                        <p class="store-name">Store name</p>
                        <p class="store-address">Shop number 102 ZS plaza gilgit</p>
                    </div>
                </div>
                
                <hr>

                <p class="product-title">{{ singleProduct.title }} </p>

                <div class="price-control">
                    <p class="product-price" >{{ singleProduct.price }} Rs</p>
                    
                    <!-- <quantity-controller :cartItem="{id: singleProduct.id, title: singleProduct.title, price: singleProduct.price}"></quantity-controller>                     -->
                </div>
                <p class="product-description">{{ singleProduct.description }}</p>
            </div>

        </div>

    </div>
</template>


<script>

// import quantityController from './quantityController.vue'
import spinner from './spinnerLight.vue'


export default {

    components: {
        // 'quantity-controller': quantityController,
        spinner,
    },
    props: {
        singleProduct: {
            type: Object
        }
    },
    data() {
        return {
        }
    },
    methods: {
        hidePopUp: function () {
            this.$store.state.popUpShow = !this.$store.state.popUpShow
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
    z-index: 1000;
}

@keyframes animate2 {

    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }

}

.pop-up-bg {
    background-color: rgba(0, 0, 0, 0.664);
    backdrop-filter: blur(7px);
    width: 100%;
    height: 100%;
    animation: animate2 0.3s linear;
}

.pre-loader{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.pop-up {
    padding: 20px;
    width: 1000px;
    height: 600px;
    display: flex;
    background: #fff;
    position: absolute;
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

.pop-up h1 {
    color: #000;
}

.product-image {
    box-sizing: border-box;
    width: 600px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    box-sizing: border-box;
}

.product-image::-webkit-scrollbar {
    width: 5px;
    background: #c4c4c4;
    border-radius: 10px;
}

::-webkit-scrollbar-track {
    background: none;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #f04d50;
    border-radius: 10px;
}

.img {
    width: 100%;
    margin-bottom: 10px;
}

.info {
    width: 360px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.top-info,
.store-info,
.product-title,
.price-control,
.product-description {
    width: 100%;
}

.top-info {
    display: flex;
    align-items: center;
}

.info hr {
    width: 95%;
    border: 1px solid #D7D7D7;
    height: 0px;
    margin: 27px 0px;
}

.top-info p {
    padding: 5px 20px;
}

.store-name {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
}

.store-address {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
}

.product-title {
    padding: 5px 0px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}

.bussiness-logo {
    width: 60px;
}

.price-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
}

.product-price {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}

.product-description {
    padding: 10px 0px;
    margin: 20px 0px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}
</style>