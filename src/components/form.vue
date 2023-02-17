<template>
    <div class="client-details">

        <div class="form">

            <div class="form-input search-input title-input">
                <button class="search-btn"> <img src="../assets/icons/search 24px.svg" alt=""></button>
                <input class="clientDetails" type="text" placeholder="Name">
            </div>

            <div class="form-input search-input title-input">
                <button class="search-btn"> <img src="../assets/icons/search 24px.svg" alt=""></button>
                <input class="clientDetails" type="text" placeholder="Phone">
            </div>

            <div class="form-input search-input title-input">
                <button class="search-btn"> <img src="../assets/icons/search 24px.svg" alt=""></button>
                <input class="clientDetails" type="text" placeholder="City">
            </div>

            <div class="form-input search-input title-input">
                <button class="search-btn"> <img src="../assets/icons/search 24px.svg" alt=""></button>
                <input class="clientDetails" type="text" placeholder="State">
            </div>

            <div class="form-input search-input title-input">
                <button class="search-btn"> <img src="../assets/icons/search 24px.svg" alt=""></button>
                <input class="clientDetails" type="text" placeholder="Street Adress">
            </div>

        </div>

        <div class="total-price">
            <p>Total Price</p>
            <p>{{ $store.state.totalPricesSum }} Rs</p>
        </div>

        <button v-on:click="placeOrder" class="order-btn">Place Order ( COD )</button>

    </div>
</template>


<script>

export default {
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
        placeOrder: function () {

            let clientDetails = document.getElementsByClassName('clientDetails')

            for (let elem in clientDetails) {

                // console.log(clientDetails[elem].value)

                if (clientDetails[elem].value) {
                    let body = {
                        "name": "Akram",
                        "phoneNumber": "03438766324",
                        "city": "Gilgit",
                        "state": "Gilgit",
                        "streetAddress": "Nagar Colony, Gilgit"
                    }
                    // this.$store.dispatch('placeOrder', body)
                    this.$store.dispatch('showTabloid')
                    clientDetails[elem].value = ''
                    
                }
                else {
                    clientDetails[elem].style.border = '1px solid red'
                    // console.log(clientDetails[elem])
                }
            }

        }
    },
    computed: {
    },
    mounted(){
    }
}

</script>


<style scoped>
.client-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form {
    background: #FBFBFB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 400px;
    height: 330px;
    margin: 0px 20px;
    padding: 39px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.form-input {
    width: 100%;
    height: 49px;
}

.total-price {
    width: 400px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 24px;
    margin: 20px 0px;
    background: #FBFBFB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.order-btn {
    width: 447px;
    height: 61px;
    color: #fff;
    background: #3E8AAD;
    padding: 0px 24px;
    border: none;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.order-btn:hover {
    transform: scale(1.02);
}

.order-btn:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
}
</style>