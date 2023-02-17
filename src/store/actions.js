import axios from 'axios'

export const getProducts = async ({ commit, state }) => {

    try {
        const response = await axios.get(`https://dummyjson.com/products`)
        commit('setProducts', response.data.products)
        state.productPreLoader = !state.productPreLoader
    }
    catch (error) {
        state.productPreLoader = false
        state.categoryError = "Products not found: It may connection Problem"
        commit('setProductsError', error)
    }
}

export const getProduct = async ({ commit, state }, payload) => {

    axios.get(`https://dummyjson.com/products/${payload}`)
        .then((response) => {
            commit('setProduct', response.data)
            state.popUpPreLoader = false
        })
        .catch((error) => {
            state.statepopUpPreLoader = state.popUpPreLoader
            state.productPreLoader = false
            commit('setProductsError', error)
        })
}

export const getCategories = async ({ commit, state }, payload) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/category/${payload}`)
        commit('setCategory', response.data.products)
        state.productPreLoader = !state.productPreLoader
    } catch (error) {
        commit('setCategoryError', error)
        state.productPreLoader = !state.productPreLoader
        console.log(error)
    }
}

export const productSearch = ({ commit, state }, payload) => {
    axios.get(`https://dummyjson.com/products/search?q=${payload}`)
        .then((response) => {
            commit('setProductSearch', response.data.products)
            console.table(response.data.products)
            state.productPreLoader = !state.productPreLoader
        })
        .catch((error) => {
            state.productPreLoader = !state.productPreLoader
            commit('setProductError', error)
        })
}

export const searchCategory = ({ commit }, payload) => commit('setCategorySearch', payload)
export const showTabloid = ({ commit }) => commit('setTabloidShow');

export const getCotegoryList = ({ commit }) => {
    axios.get('https://dummyjson.com/products/categories')
        .then((response) => commit('setCategoryList', response.data))
}

export const ascendingSort = ({ commit }, payload) => commit('setAscendingSort', payload)
export const descendingSort = ({ commit }, payload) => commit('setDescendingSort', payload)
export const addCartItem = ({ commit }, payload) => commit('setCartItem', payload)
export const deleteCartProduct = ({ commit }, payload) => commit('setDeleteProduct', payload)
export const addAndQuantity = ({ commit }) => commit('setAddAndQuantity')
export const increaseQuantity = ({ commit }, payload) => commit('setIncreaseQuantity', payload)
export const decreaseQuantity = ({ commit }, payload) => commit('setDecreaseQuantity', payload)

export const placeOrder = ({ commit }, payload) => {
    let response = axios.post(`192.168.1.57::5000/api/${payload}`)
    commit('setPlaceOrder', response)
}

export const orderMessage = ({ commit }) => commit('setOrderMessage')
export const increamentInCartItem = ({ commit }, payload) => commit('setIncreamentInCartItem', payload)
export const decreamentInCartItem = ({ commit }, payload) => commit('setDecreamentInCartItem', payload)
export const setInitialProductQuantity = ({ commit }) => commit('setInitialProductQuantity')
export const setTotalProducttPrice = ({ commit }) => commit('setTotalProducttPrice')
export const setPricesSum = ({ commit }, payload) => commit('setPricesSum', payload)
