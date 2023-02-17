export const setProducts = (state, payload) => state.products = payload

export const seProductsError = (state, payload) => {
    state.categoryError = "Products not found: It may connection Problem"
    state.products = []
}

export const setProduct = (state, payload) => state.singleProduct = payload;

export const setProductError = (state, payload) => {
    state.product = []
    state.categoryError = "Product not found: It may connection Problem or Invalid Keyword"
}

export const setCategory = (state, payload) => state.categories = payload;

export const setCategoryError = (state, payload) => {
    state.categories = []
    state.categoryError = "Category not found: It may connection Problem or Invalid Keyword"
}

export const setProductSearch = (state, payload) => {
    state.products = payload
    state.categories = payload
}

export const setCategorySearch = (state, payload) => state.category = payload;
export const setTabloidShow = (state) => state.tabloidShow = !state.tabloidShow;
export const setCategoryList = (state, payload) => state.categoryList = payload

// ______________________________________________________________________

export const setAscendingSort = (state, payload) => {

    if (payload == 'categories') state.newArr = state.categories;
    if (payload == 'products') state.newArr = state.products;

    let length = state.newArr.length

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (state.newArr[i].price > state.newArr[j].price) {
                let temp = state.newArr[i];
                state.newArr[i] = state.newArr[j];
                state.newArr[j] = temp;
            }
        }
    }

    if (payload == 'categories') state.categories = [...state.newArr];
    if (payload == 'products') state.products = [...state.newArr];

}

export const setDescendingSort = (state, payload) => {
    if (payload == 'categories') {
        state.newArr = state.categories
    }
    if (payload == 'products') {
        state.newArr = state.products
    }

    let length = state.newArr.length

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (state.newArr[i].price < state.newArr[j].price) {
                let temp = state.newArr[i];
                state.newArr[i] = state.newArr[j];
                state.newArr[j] = temp;
            }
        }
    }

    if (payload == 'categories') state.categories = [...state.newArr];
    if (payload == 'products') state.products = [...state.newArr];
}

// ______________________________________________________________________

export const setCartItem = (state, payload) => {

    let index = state.cartItems.findIndex(e => e.title == payload.title)
    if (index == -1) {
        state.cartItems.push(payload)
        state.totalProductPrice.push(payload.price)
    }
}

export const setDeleteProduct = (state, payload) => {
    state.cartItems = state.cartItems.filter(item => item != payload)
}

export const setAddAndQuantity = (state) => state.addAndQuantity = !state.addAndQuantity

export const setInitialProductQuantity = (state) => {
    for (let item in state.cartItems) {
        state.totalPricesSum += state.cartItems[item].totalPrice;
    }
}

export const setTotalProducttPrice = (state) => {
    state.totalPricesSum = 0;
    for (let item in state.cartItems) {
        state.cartItems[item].totalPrice = state.cartItems[item].price
        state.totalPricesSum += state.cartItems[item].totalPrice;
    }
}

export const setIncreamentInCartItem = (state, payload) => {
    let index = state.cartItems.findIndex(el => el.id === payload.id);
    state.cartItems[index].quantity += 1;
    state.cartItems[index].totalPrice = state.cartItems[index].price * state.cartItems[index].quantity;
}

export const setPricesSum = (state) => {
    state.totalPricesSum = 0;
    for (let item in state.cartItems) state.totalPricesSum += state.cartItems[item].totalPrice;
}

export const setDecreamentInCartItem = (state, payload) => {
    let index = state.cartItems.findIndex(el => el.id === payload.id);
    if (payload.quantity > 1) {
        state.cartItems[index].quantity -= 1;
        state.cartItems[index].totalPrice = state.cartItems[index].price * state.cartItems[index].quantity;
        state.totalProductPrice.push(state.cartItems[index].price)

    }

}