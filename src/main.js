import './scss/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        todos: [
            {
                title: "Product item",
                added: false
            }
        ]
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        
    }
})


const app = createApp(App)
app.use(router)
app.use(Vuex)
app.mount('#app')
