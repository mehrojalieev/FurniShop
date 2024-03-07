import { createRouter, createWebHistory } from "vue-router";
import NotFoundVue from "@/views/NotFound.vue";
import HomePageVue from "@/views/HomePage.vue";


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
            path: "/cart",
            name: 'Cart',
            component: () => import('../views/Cart.vue')
        },
        {
            path: "/like",
            name: 'Wishlist',
            component: () => import('../views/Like.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: "NotFound",
            component: NotFoundVue
        }
    ]
})


export default router