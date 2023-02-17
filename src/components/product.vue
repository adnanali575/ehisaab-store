<template>

    <div class="items-list">

        <div class="pre-loader-box">
            <spinner v-if="$store.state.productPreLoader"></spinner>
            <h1 class="error-text">{{ $store.state.categoryError }}</h1>
        </div>

        <span class="card-box" v-if="!$store.state.productPreLoader">
            <div class="card" v-for="product in products" :key="product.id">
                <div v-if="true" v-on:click="showPopUp(product.id)" class="image">
                    <img :src="product.thumbnail" alt="">
                    <p v-show="false" class="out-of-stock">Out of Stock</p>
                </div>

                <p class="title">{{ product.title }}</p>
                <div class="pricing">
                    <p>{{ product.price }} Rs</p>
                    <quantity-controller v-if="showQuantityController(product)" :cartItem="cartItems.find(el => el.id === product.id)"></quantity-controller>
                    <button v-else
                        v-on:click="addToCart(product, product.title, product.thumbnail, product.price, product.id)"
                        class="cart-btn">Add to Card</button>
                </div>
            </div>
        </span>

        <popup v-bind:singleProduct="singleProduct"></popup>


    </div>

</template>

<script>

import qunatityController from './quantityController.vue'
import popup from './popUp.vue'
import spinner from './spinnerDark.vue'

export default {

    components: {
        popup,
        'quantity-controller': qunatityController,
        spinner,
    },
    props: {
        products: {
            type: Array
        }
    },
    computed: {
        singleProduct() {
            return this.$store.state.singleProduct
        },
        cartItems() {
            return this.$store.state.cartItems;
        }
    },
    methods: {
        showQuantityController (product) {
            return this.cartItems.some(el => el.id === product.id)
        },
        showPopUp: function (productId) {

            this.$store.dispatch('getProduct', productId)
            this.$store.state.popUpShow = !this.$store.state.popUpShow
            this.$store.state.popUpPreLoader = true
        },
        addToCart: function (product, title, thumbnail, price, id) {
            const productDetails = {
                id: id,
                title: title,
                price: price,
                totalPrice: price,
                quantity: 1,
                thumbnail: thumbnail,
            }


            this.$store.dispatch('addCartItem', productDetails)
            this.$store.dispatch('addAndQuantity')
            this.$store.dispatch('setPricesSum')
        },
    },
}

</script>

<style scoped>
.items-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.card-box {
    width: 80%;
    min-height: 880px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.pre-loader-box {
    height: fit-content;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pre-loader {
    margin: 50px 0px;
    width: 40px;
    height: 40px;
}

.error-text {
    line-height: 150px;
    color: red;
    font-weight: lighter;
    animation: error_animation 0.8s linear;
}

@keyframes error_animation {
    0% {
        transform: scale(0.7);
    }

    70% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}

.card {
    width: 289px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 14px;
    margin: 40px 20px;
    animation: animate 1s normal;
}

.inner-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes animate {
    0% {
        transform: translatey(100px);
    }

    100% {
        transform: translate(0);
    }
}

.image {
    background-color: white;
    width: 100%;
    height: 291px;
    border: 1px solid #D1D1D1;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.image img {
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.image img:hover {
    transform: scale(1.1);
}

.out-of-stock {
    background-color: #3E8AAD;
    width: 118.17px;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;
    position: absolute;
    margin-left: 170px;
    margin-top: 242px;
    border-top-left-radius: 10px;
}

.title {
    width: 100%;
    padding: 17px 0px;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #000;
}

.pricing {
    /* background-color: blue; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pricing p {
    color: #000;
    padding: 17px 0px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
}

.cart-btn {
    background: none;
    border: none;
    text-decoration: underline;
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;
    text-transform: uppercase;
    color: #3E8AAD;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.cart-btn:active {
    color: #b9e8ff;
}

@media (max-width: 1350px) {
    .items-list {
        width: 90%;
    }
}
</style>