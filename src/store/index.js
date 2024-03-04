// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'

// Vue.use(Vuex)


const store = createStore({
    state: {
        cart_data: []
    },
   
    mutations: {
        addData(state, payload){
            let cart_index;
            console.log(payload);
            cart_index = state.cart_data.findIndex(cart => cart.id === payload.id)
            if(cart_index === -1){
                state.cart_data = [...state.cart_data, payload]

            }
        }
    },
    actions: {
        addToStoreData({commit}, payload){
                commit('addData', payload)
            }
    },
    getters: {
        getProduct(state){
            return state.cart_data
        }
     },
})

export default store