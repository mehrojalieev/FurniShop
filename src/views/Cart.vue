<script>

    import {RouterLink} from 'vue-router'
import Container from '../utils/Container.vue'
    export default {
        data(){
            return {
                cartData: []
            }
        },
        computed: {
            DataFromStore(){
                return this.$store.getters.getProduct
            }
        },
        methods: {
            removeCart(index){
                this.$store.dispatch('removeCartStore', index )
            }
        }
    }
</script>

<template>
    <Container>
        <div v-if="DataFromStore.length > 0" class="cart-wrapper">
            <div v-for="(cart, index) in DataFromStore" :key="index" class="cart-box">

           <router-link :to="{ name: 'Single_Product', params: {product_id:  `${cart.id}` } }">
            <button class="add__like-btn"><span class="material-symbols-outlined">favorite</span></button>
                <img :src="cart.image" :alt="cart.name">
            </router-link>
                <h3>{{cart.name}}</h3>
                <div class="price-info">
                    <p>Price:</p>
                    <strong class="price">${{cart.price}}</strong>
                    <span>20%</span>
                </div>
                <div class="box-action">
                    <button class="purchase-btn">Purchase</button>
                    <button @click="removeCart(index)" class="remove__cart-btn">Remove</button>
                </div>
        </div>

        </div>
        
        <div v-else class="empty__cart-wrapper">
            <h2>Your Shopping Cart Is Empty</h2>
            <span class="material-symbols-outlined">shopping_cart</span>
            <RouterLink class="cart__shopping-link" to="/">Continue Shopping</RouterLink>
        </div>
    </Container>
</template>


<style>
    .cart-wrapper{
        margin: 20px 0;
        display: grid;
        gap: 20px 0;
        grid-template-columns: repeat(4, 1fr);
    }
    .cart-box{
        max-width: 300px;
        text-align: left;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 0 5px gray;
        position: relative;

        .add__like-btn{
            position: absolute;
            right: 10px;
            top: 10px;
            border: none;
            background: transparent;
            span{
                transition: 0.2s;
                font-size: 28px;
                &:hover{
                    transform: scale(1.1);
                    cursor: pointer;
                    color: #ff0000;
                }
                &:active{
                    transform: scale(0.98);
                }
            }
        }
        img{
            width: 100%;
            height: 190px;
            object-fit: contain;
        }
        h3{
            font-size: 25px;
            letter-spacing: 1px;
        }
      
    }
    .price-info{
        display: flex;
        p{
            font-weight: 500;
            font-size: 15px !important;
        }
        .price{
            flex: 1;
            text-decoration: none ;
            font-weight: 600 ;
            color: black ;
            font-size: 20px ;
        }
        span{
            color: var(--success-color);
            font-weight: 600;
            font-size: 20px;
            font-style: italic;
        }
    }
    .box-action{
        margin-top: 15px;
        width: 100%;
        display: flex;
        /* padding: 0 7px; */
        align-items: center;
        justify-content: space-between;
        
        button{
            border: none;
            padding: 3px 30px;
            font-size: 16px;
            border-radius: 5px;
            background: transparent;
            transition: .1s;
            cursor: pointer;
            border: 1.5px solid var(--success-color);
           
            &:active{
                transform: scale(0.98);
            }
        }
        .purchase-btn{
            &:hover{
                color: white;
                background: var(--success-color);
            }
        }
        .remove__cart-btn{
            background-color: #ff0000e0;
            color: #fff;
            border: none;
            &:hover{
                opacity: 0.8;
            }
        }
        strong{
            font-size: 23px;
        }
     
    }


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