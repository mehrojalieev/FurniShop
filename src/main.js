import './scss/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import Vue from 'vue'
import { createStore } from 'vuex'
// Vue.use(Vuex)


const store = createStore({
    state(){
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state, payload){
            state.counter = state.counter + payload
        }
    },
    getters: {
        getCounter(state){
            return state.counter
        }
    },
})


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
