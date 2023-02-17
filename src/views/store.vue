<template>

    <div class="store-content">

        <div class="top-content">

            <div class="business-logo">
                <img src="../assets/images/Bussiness logo.png" alt="">
            </div>

            <div class="text-content">
                <h1 class="heading">Pine Technologies</h1>
                <p class="text">It is a long established fact that a reader will be distracted by the readable content
                    of a page when
                    looking a page when looking at its layout. The point of using Lorem Ipsum is that it has a</p>

                <div class="info">
                    <p class="address"> Shop # 206 ZS Plaza Gilgit </p>
                    <p> 03402042304 </p>
                    <p class="name"> Garments </p>
                </div>
            </div>

        </div>

        <search payload="products" ></search>

        <product v-bind:products="products" ></product>

    </div>

</template>


<script>

import product from '../components/product.vue'
import search from '../components/search.vue'

export default {
    components: {
        search,
        product,
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        products(){
            return this.$store.state.products;
        }
    },
    mounted() {
        this.$store.state.productPreLoader = !this.$store.state.productPreLoader
        this.$store.dispatch('getProducts')
    }
}

</script>


<style scoped>
.store-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
}

.top-content {
    padding: 74px 0px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

.business-logo {
    width: fit-content;
}

.business-logo img {
    width: 150px;
    height: 150px;
}

.text-content {
    width: 728PX;
}

.text-content .heading,
.text-content p {
    color: var(--text-color-black);
}

.text-content .heading {
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
}

.text {
    margin: 35px 0px 28px 0px;
    text-align: justify;
}

.text,
.info p {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
}

.info p {
    padding: 4px 0px;
}

.name {
    text-align: end;
}

.info {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.address {
    grid-column-start: 1;
    grid-column-end: 3;
}

.search-fields {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px 36px;
    /* border: 1px solid black; */
    width: 1070px;
    min-height: 77px;
    /* min-width: 1126px; */
}
</style>