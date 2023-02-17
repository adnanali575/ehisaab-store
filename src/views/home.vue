<template>

    <div class="home-content">

        
        <div class="bg-image">
            <img src="../assets/images/Banner.jpg" alt="">
        </div>

        <search payload="categories" ><catagory-search/></search>

        <product v-bind:products="categories"></product>        

    </div>


</template>

<script>

import product from '../components/product.vue'
import search from '../components/search.vue'
import cataogrySearch from '../components/catagorySearch.vue'


export default {

    components: {
        product,
        search,
        'catagory-search': cataogrySearch,
    },
    data() {
        return {
        }
    },
    computed: {
        categories(){
            return this.$store.state.categories;
        },
        singleProduct(){
           return this.$store.state.singleProduct
        }
    },
    mounted(){
        this.$store.state.productPreLoader = !this.$store.state.productPreLoader
        this.$store.dispatch('getCategories', 'smartphones')
    }
}
</script>

<style>
.home-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
    overflow: hidden;
}

.bg-image {
    width: 100%;
}

.bg-image img {
    width: 100%;
    margin-top: -3px;
}

</style>