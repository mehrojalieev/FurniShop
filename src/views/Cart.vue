<script>
    import { RouterLink } from 'vue-router';
import Container from '../utils/Container.vue'
    // export default {

    // }
</script>

<template>
    <Container>
        <div class="cart-wrapper">
           
        </div>
        <div class="empty__cart-wrapper">
            <h2>Your Shopping Cart Is Empty</h2>
            <span class="material-symbols-outlined">shopping_cart</span>
            <RouterLink class="cart__shopping-link" to="/">Continue Shopping</RouterLink>
        </div>
    </Container>
</template>


<style>
    .empty__cart-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        h2{
            font-size: 40px;
        }
        span{
            margin-top: 20px;
            font-size: 80px;
        }
        .cart__shopping-link{
            margin-top: 20px;
            font-size: 28px;
            border: 1px solid var(--success-color);
            text-decoration: none;
            color: var(--success-color);
            border-radius: 10px;
            padding: 0 50px;
            transition: 0.2s;
            &:hover{
                box-shadow: 0 0 5px var(--success-color);
            }
        }

    }
</style>