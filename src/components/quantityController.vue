<template>

    <div class="inc-dec">
        <img v-on:click="decreaseQuantity" src="../assets/icons/remove circle outline 24px.svg" alt="">
        <p>{{ cartItem.quantity }}</p>
        <img v-on:click="increaseQuantity" src="../assets/icons/add circle outline 24px.svg" alt="">
    </div>

</template>

<script>

export default {
    props: {
        cartItem: {
            type: Object
        },
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
        increaseQuantity: function () {
            this.$store.dispatch('increamentInCartItem', this.cartItem)
            this.$store.dispatch('setPricesSum')
        },
        decreaseQuantity: function () {
            this.$store.dispatch('decreamentInCartItem', this.cartItem)
            this.$store.dispatch('setPricesSum')
        }
    },
    mounted() {
    }
}

</script>

<style scoped>
.inc-dec {

    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.inc-dec p {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #606060;
    padding: 0px 10px;
    text-align: center;
}

.inc-dec img {
    width: 16px;
    padding: 9px;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.inc-dec img:hover {
    background-color: var(--bg-gray);
}

.inc-dec img:active {
    background: none;
}
</style>