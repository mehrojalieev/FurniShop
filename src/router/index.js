import { createRouter, createWebHistory } from "vue-router";
import NotFoundVue from "@/views/NotFound.vue";
import HomePageVue from "@/views/HomePage.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";


const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: "Home",
            component: HomePageVue
        },  
        {
            path: '/product/:product_id',
            name: "Single_Product",
            component: () => import('../views/SingleProduct.vue')
        },
        {
            path: "/about",
            name: 'About',
            component: About
        },
        {
            path: "/contact",
            name: 'Contact',
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