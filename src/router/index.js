import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "@/views/HomePage.vue";
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"
import NotFoundVue from "@/views/NotFound.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: HomePageVue
        },  
        {
            path: "/about",
            name: 'About',
            component: About
        },
        {
            path: "/contact",
            component: Contact
            
        },
        {
            path: '/:catchAll(.*)',
            name: "NotFound",
            component: NotFoundVue
        }
    ]
})


export default router