
import home from './views/home.vue'
import store from './views/store.vue'
import cart from './views/cart.vue'

export default [
    {
        path: '/', component: home,
    },
    { path: '/store', component: store,
},
    { path: '/cart', component: cart },
]