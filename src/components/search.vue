<template>
    <div class="search-fields">

        <div style="width: 289px; height: 41px;" class="search-input title-input">

            <button v-on:click="productSearch" class="search-btn"> <img src="../assets/icons/search 24px.svg"
                    alt=""></button>

            <input v-model="searchValue" v-on:keypress.enter="productSearch" type="text"
                placeholder="Search bar">

        </div>

        <slot></slot>

        <div class="min-max">
            <button v-on:click="ascendingSort" id="min">Min Price</button>
            <p>-</p>
            <button id="max" v-on:click="descendingSort">Max Price</button>
        </div>


    </div>
</template>
 

<script>


export default {
    components: {
    },
    props: {
        payload: {
            type: String
        }
    },
    data() {
        return {
            searchValue: '',
        }
    },
    methods: {
        productSearch: function () {
            if (this.searchValue) {
                this.$store.state.productPreLoader = !this.$store.state.productPreLoader
                this.$store.dispatch('productSearch', this.searchValue)
                this.searchValue = ''
            }
        },
        ascendingSort: function () {
            this.$store.dispatch('ascendingSort', this.payload)
        },
        descendingSort: function () {
            this.$store.dispatch('descendingSort', this.payload)
        },
    },
    mounted() {

    }
}

</script>


<style>
.search-fields {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1126px;
    padding: 13px 26px;
    margin: 40px 0px 20px 0px;
}

.search-input {
    font-family: var(--font);
    width: 289px;
    background: var(--bg-gray);
    border: 1px solid #D1D1D1;
    display: grid;
}

.search-btn li {
    display: flex;
}

.search-input a {
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.search-btn {
    width: 100%;
    border: none;
    outline: none;
    background: none;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

}

.search-btn:hover,
.search-input a:hover {
    background-color: var(--hover-bg);
}

.search-btn:active,
.search-input a:active {
    background: var(--bg-gray);
}

.title-input {
    width: 100%;
    grid-template-columns: 40px 1fr;
    animation: search-animation 0.5s linear;
}

@keyframes search-animation {

    0% {
        transform: translateX(-40px);
    }

    100% {
        transform: translateX(0px);
    }

}

.catagory-input {
    width: 289px;
    grid-template-columns: 1fr 40px;
}

.title-input input {
    background-color: red;
    height: 100%;
}

.search-input input {
    height: 100%;
    padding: 0px 10px;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    background: none;
    color: var(--text-color-dark);
    outline: none;
    border: none;
}

.search-input img {
    width: 10.9px;
    height: 10.9px;
}



/* ________________________________[ Min Max ]________________________________________________________________ */

.min-max {
    background: var(--bg-gray);
    border: 1px solid #D1D1D1;
    width: 287.44px;
    height: 41px;
    display: grid;
    grid-template-columns: 1fr 40px 1fr;
    animation: min-max 0.5s linear;
}

@keyframes min-max {

    0% {
        transform: translateX(40px);
    }

    100% {
        transform: translateX(0px);
    }

}

.min-max p {
    align-self: center;
    text-align: center;
}

.min-max button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-family: var(--font);
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: (--text-color-dark);
    transition: all 0.2s ease-in-out;
}

.min-max button:hover {
    background: var(--hover-bg);
}

.min-max button:active {
    background: var(--bg-gray);
}


@media (max-width: 1180px) {
    .search-fields {
        width: 90%;
        /* background-color: red; */
        padding: 13px 0px;
        flex-wrap: wrap;
    }
}

@media (max-width: 1050px) {
    .min-max {
        margin: 30px 0px;
    }
}

@media (max-width: 700px) {
    .search-fields {
        flex-direction: column;
        align-items: center;
    }

    .catagory-input {
        margin-top: 30px;
    }
}
</style>