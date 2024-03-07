import { createStore } from 'vuex'

const store = createStore({
    state: {
        cart_data: [],
        liked_data: [],
    },
   
    mutations: {
        addData(state, payload){
            console.log(payload);
            state.cart_data = [...state.cart_data, payload]
        },
        addToLiked(state, payload){
            console.log(payload);
            state.liked_data = [...state.liked_data, payload]
        },
        removeCart(state, cartIndex){
            state.cart_data.splice( cartIndex, 1 )
        },
        unlikedProduct(state, likedIndex){
            state.liked_data.splice(likedIndex, 1)
        }

       
    },
    // actions: {
    //     addToStoreData({commit}, payload){
    //             commit('addData', payload)
    //         },
    //         removeCartStore({commit}, cartIndex){
    //             commit('removeCart', cartIndex)
    //         }
    // },
    // getters: {
    //     getProduct(state){
    //         return state.cart_data
    //     }
    //  },
})

export default store