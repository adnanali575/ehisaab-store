<template>
    <div class="packages">


        <div class="package">
            <p class="package-name">Package 1</p>
            <p class="store-name">Store Name</p>
            
            <!-- ----------------------------------------------------------------------- -->
            <div v-for="product in cartItems" :key="product.id" class="package-info">
                
                <div class="cart-product-image">
                    <img :src="product.thumbnail" alt="">
                </div>
                
                <div class="text">
                    <p class="product-name">{{ product.title }}</p>
                    <p class="pricing">{{ product.price }} Rs x {{ product.quantity }} = {{ product.totalPrice }} Rs</p>
                </div>
                
                <div class="icons">
                    <quantity-controller :cartItem="{id: product.id, title: product.title, price: product.price, quantity: product.quantity}"></quantity-controller>
                    <span class="delete">
                        <img v-on:click="deleteCartProduct(product)" src="../assets/icons/delete 24px.svg" alt="">
                    </span>
                </div>

            </div>
            <!-- ----------------------------------------------------------------------- -->

        </div>



    </div>
</template>


<script>

import quantityController from './quantityController.vue'

export default {
    components: {
        'quantity-controller': quantityController,
    },
    data(){
        return {
            products: [],
        }
    },
    computed: {
        cartItems(){
            return this.$store.state.cartItems
        }
    },
    methods: {
        deleteCartProduct: function(cartProduct){
            this.$store.dispatch('deleteCartProduct', cartProduct)
            this.$store.dispatch('addAndQuantity')
            this.$store.dispatch('setPricesSum')
        }
    },
    mounted(){
    }
}

</script>


<style scoped>
.packages {
    display: flex;
    flex-direction: column;
}

.package {
    margin-bottom: 20px;
    width: 760px;
    min-height: 374px;
    background: #FBFBFB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 59px;
}

.package-info {
    width: 100%;
    box-sizing: border-box;
    margin: 35px 0px;
    display: grid;
    grid-template-columns: 90px 1fr auto;
}

.cart-product-image{
    height: 80px;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.cart-product-image img {
    height: 100%;
}

.text {
    padding: 12px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.package-name {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    padding: 3px 0px;
}

.store-name {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding: 3px 0px;
}

.product-name {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
}

.pricing {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    padding: 8px 0px;
}

.icons {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.icons img {
    padding: 9px;
    border-radius: 30%;
    width: 16px;
    cursor: pointer;    
    transition: all 0.2s ease-in-out;
}

.icons img:hover {
    background: var(--bg-gray);
}

.icons img:active {
    background: none;
}

.delete {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>