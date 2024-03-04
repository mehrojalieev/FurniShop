import { createStore } from 'vuex'

const store = createStore({
    state: {
        cart_data: []
    },
   
    mutations: {
        addData(state, payload){
            let cart_index;
            cart_index = state.cart_data.findIndex(cart => cart.id === payload.id)
            if(cart_index === -1){
                state.cart_data = [...state.cart_data, payload]

            }
        },
        removeCart(state, cartIndex){
            state.cart_data.splice( cartIndex, 1 )
        }
    },
    actions: {
        addToStoreData({commit}, payload){
                commit('addData', payload)
            },
            removeCartStore({commit}, cartIndex){
                commit('removeCart', cartIndex)
            }
    },
    getters: {
        getProduct(state){
            return state.cart_data
        }
     },
})

export default store