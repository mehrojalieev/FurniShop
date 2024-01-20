import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "@/views/HomePage.vue";
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePageVue
        },  
        {
            path: "/about",
            component: About
        },
        {
            path: "/contact",
            component: Contact
            
        }
    ]
})


export default router