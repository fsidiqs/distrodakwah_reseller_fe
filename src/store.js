/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userLocalStorage = window.localStorage.getItem("user")
const cart = window.localStorage.getItem("cart")
const store = new Vuex.Store({
    state: {
        loading: false,
        user: userLocalStorage ? JSON.parse(userLocalStorage) : null,
        //cart
        cart: cart ? JSON.parse(cart) : [],
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        addToCart(state, item) {
            let found = state.cart.find(cartItem => cartItem.id == item.id && cartItem.kindId == item.kindID)
            if (found) {
                found.Qty++
            } else {
                state.cart.push(item)
            }
            saveItemToCart(state.cart)
        },
        
    }

})

const saveItemToCart = (cart) => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
}

export default store