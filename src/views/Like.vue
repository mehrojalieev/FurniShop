<script>
    import Container from '../utils/Container.vue'
    import Products from "@/database/products.json"
    export default {
        data(){
            return {
                singleProduct: {},
                likedId: [],
            }
        },
        methods: {
            addCart(){
                this.$store.commit('addData', this.singleProduct)
            },
            unlikeProduct(index){
                this.$store.commit('unlikedProduct', index)
            },
          
        },
    
    }
</script>

<template>
    <Container>
        <div v-if="this.$store?._state.data.liked_data?.length > 0" class="cart-wrapper">
            <div v-for="(cart, index) in  this.$store._state.data.liked_data" :key="index" class="cart-box">

           <router-link :to="{ name: 'Single_Product', params: {product_id:  `${cart.id}` } }">
                <img :src="cart.image" :alt="cart.name">
            </router-link>
                <h3>{{cart.name}}</h3>
                <div class="price-info">
                    <p class="price-title">Price:</p>
                    <strong class="price">${{cart.price}}</strong>
                    <span>20%</span>
                </div>
                <div class="box-action">
                    
                    <button @click="unlikeProduct(index)" class="remove__cart-btn">Unlike</button>
                </div>
        </div>

        </div>
        
        <div v-else class="empty__cart-wrapper">
            <h2>Add your Favourite</h2>
            <span class="material-symbols-outlined">thumb_up</span>
            <RouterLink class="cart__shopping-link" to="/">Continue Shopping</RouterLink>
        </div>
    </Container>
</template>



<style scoped>
    
    .cart-wrapper{
        width: 100%;
        margin: 20px 0;
        display: grid;
        gap: 20px 10px;
        padding: 1rem;
        grid-template-columns: repeat(4, 1fr);
    }
    .cart-box{
        max-width: 290px;
        text-align: left;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 0 5px gray;
        position: relative;

        img{
            width: 100%;
            height: 180px;
            object-fit: contain;
        }
        h3{
            font-size: 22px;
            letter-spacing: 1px;
        }
      
    }
    .price-info{
        display: flex;
        .price-title{
            font-weight: 500;
            font-size: 16px !important;
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
        margin-top: 20px;
        width: 100%;
        button{
            border: none;
            width: 100%;
            padding: 2px 0;
            font-size: 16px;
            border-radius: 5px;
            background: transparent;
            transition: .1s;
            cursor: pointer;
            color: #fff;
            background-color: red !important;
            &:active{
                transform: scale(0.98);
            }
        }
      
      
       
     
    }


    .empty__cart-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 530px;
        margin: auto;
        height: 100vh;
        h2{
            font-size: 40px;
            max-width: 530px;
            text-align: center;
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
            width: 100%;
            max-width: 400px;
            text-align: center;
            transition: 0.2s;
            &:hover{
                box-shadow: 0 0 5px var(--success-color);
            }
        }

    }

    /* --- RESPONSIVE STYLES */
    @media only screen and (max-width: 1110px){
        .cart-box{
        max-width: 240px;

        .add__like-btn{
            span{
                font-size: 27px;
            }
        }
        img{
            height: 170px;
        }
        h3{
            font-size: 20px;
        }
      
    }
    .price-info{
        .price-title{
            font-size: 15=px !important;
        }
        .price, span{
            font-size: 19px ;
        }
    }
    .box-action{
        column-gap: 10px;
        
        button{
            padding: 2px 17px;
            font-size: 15px;

        }

     
    }
    }
    @media only screen and (max-width: 1034px){
        .cart-wrapper{
            column-gap: 13px;
            grid-template-columns: repeat(3, 1fr);
        }
        .cart-box{
        max-width: 310px;

        .add__like-btn{
            span{
                font-size: 27px;
            }
        }
        img{
            height: 200px;
        }
        h3{
            display: inline-block;
            margin-top: 5px;
            font-size: 23px;
        }
      
    }
    .price-info{
        .price-title{
            font-size: 20px !important;
        }
        .price, span{
            font-size: 20px ;
        }
    }
    .box-action{
        column-gap: 10px;
        
        button{
            padding: 2px 30px;
            font-size: 15px;

        }

     
    }
    }
    @media only screen and (max-width: 908px){
        .cart-wrapper{
            column-gap: 13px;
            grid-template-columns: repeat(3, 1fr);
        }
        .cart-box{
        max-width: 277px;

        .add__like-btn{
            span{
                font-size: 25px;
            }
        }
        img{
            height: 180px;
        }
        h3{
            display: inline-block;
            margin-top: 5px;
            font-size: 21px;
        }
      
    }
    .price-info{
        .price-title{
            font-size: 18px !important;
        }
        .price, span{
            font-size: 18px ;
        }
    }
    .box-action{
        column-gap: 10px;
        
        button{
            padding: 3px 25px;
            font-size: 15px;

        }

     
    }
    }
    @media only screen and (max-width: 848px){
        .cart-wrapper{
            padding: 5px;
            column-gap: 13px;
            grid-template-columns: repeat(3, 1fr);
        }
        .cart-box{
        max-width: 236px;

        .add__like-btn{
            span{
                font-size: 25px;
            }
        }
        img{
            height: 155px;
        }
        h3{
            font-size: 19px;
        }
      
    }
    .price-info{
        .price-title, .price, span{
            font-size: 17px !important;
        }
    }
    .box-action{
        column-gap: 15px;
        
        button{
            padding: 2px 19px;
            font-size: 15px;

        }

     
    }
    }
    @media only screen and (max-width: 742px){
        .cart-wrapper{
            padding: 5px;
            grid-template-columns: repeat(3, 1fr);
        }
        .cart-box{
        max-width: 223px;

        .add__like-btn{
            span{
                font-size: 23px;
            }
        }
        img{
            height: 150px;
        }
        h3{
            font-size: 18px;
        }
      
    }
    .price-info{
        .price-title, .price, span{
            font-size: 16px !important;
        }
    }
    .box-action{
        column-gap: 10px;
        button{
            padding: 2px 14px;
            font-size: 14px;

        }

     
    }
    }
    @media only screen and (max-width: 678px){
        .cart-wrapper{
            padding: 5px;
            grid-template-columns: repeat(3, 1fr);
        }
        .cart-box{
        max-width: 200px;

        .add__like-btn{
            span{
                font-size: 23px;
            }
        }
        img{
            height: 120px;
        }
        h3{
            font-size: 16px;
        }
      
    }
    .price-info{
        .price-title, .price, span{
            font-size: 15px !important;
        }
    }
    .box-action{
        button{
            padding: 2px 12px;
            font-size: 13px;

        }

     
    }
    }
    @media only screen and (max-width: 624px){
        .cart-wrapper{
            padding: 10px;
            grid-template-columns: repeat(2, 1fr);
        }
        .cart-box{
        max-width: 275px;

        .add__like-btn{
            span{
                font-size: 25px;
            }
        }
        img{
            height: 160px;
        }
        h3{
            font-size: 19px;
        }
      
    }
    .price-info{
        .price-title, .price, span{
            font-size: 16px !important;
        }
    }
    .box-action{
        margin-top: 20px;
        button{
            padding: 3px 28px;
            font-size: 15px;

        }

     
    }
    }
    @media only screen and (max-width: 578px){
        .cart-wrapper{
            padding: 8px;
            grid-template-columns: repeat(2, 1fr);
        }
        .cart-box{
        max-width: 247px;

        .add__like-btn{
            span{
                font-size: 25px;
            }
        }
        img{
            height: 140px;
        }
        h3{
            font-size: 19px;
        }
      
    }
    .price-info{
        .price-title, .price, span{
            font-size: 16px !important;
        }
    }
    .box-action{
        margin-top: 20px;
        button{
            padding: 2px 21px;
            font-size: 15px;

        }

     
    }
    }

    @media only screen and (max-width: 516px){
        .cart-box{
        max-width: 230px;

        .add__like-btn{
            span{
                font-size: 25px;
            }
        }
        img{
            height: 130px;
        }
        h3{
            font-size: 19px;
        }
    }
    .price-info{
        .price-title, .price, span{
            font-size: 16px !important;
        }
    }
    .box-action{
        button{
            padding: 2px 17px;
            font-size: 14px;

        }

     
    }
    }

    @media only screen and (max-width: 480px){
        .cart-box{
        max-width: 210px;

        .add__like-btn{
            span{
                font-size: 23px;
            }
        }
        img{
            height: 110px;
        }
        h3{
            font-size: 17px;
        }
    }
    .price-info{
        .price-title, .price, span{
            font-size: 16px !important;
        }
    }
    .box-action{
        button{
            padding: 1px 14px;
            font-size: 13px;

        }

     
    }
    }
    @media only screen and (max-width: 434px){
        .cart-wrapper{
            justify-items: center;
        }
        .cart-box{
        max-width: 190px;

        .add__like-btn{
            span{
                font-size: 21px;
            }
        }
        img{
            height: 100px;
        }
        h3{
            font-size: 16px;
        }
    }
    .price-info{
        .price-title, .price, span{
            font-size: 15px !important;
        }
    }
    .box-action{
        button{
            padding: 1px 11px;
            font-size: 13px;

        }

     
    }
    .empty__cart-wrapper{
        h2{
            font-size: 34px;
            line-height: 50px;
        }
        span{
            font-size: 70px;
        }
        .cart__shopping-link{
            font-size: 22px;
            max-width: 260px;
        }

    }
    }
    @media only screen and (max-width: 394px){
     
        .cart-box{
        max-width: 175px;

        .add__like-btn{
            span{
                font-size: 21px;
            }
        }
        img{
            height: 100px;
        }
        h3{
            letter-spacing: 0.4px;
            font-size: 14px;
        }
    }
    .price-info{
        .price-title, .price, span{
            font-size: 14px !important;
        }
    }
    .box-action{
        button{
            padding: 1px 8px;
            font-size: 13px;

        }

     
    }
    }
    @media only screen and (max-width: 370px){
        .cart-wrapper{
            grid-template-columns: 1fr;
        }
     .cart-box{
     max-width: 300px;

     .add__like-btn{
         span{
             font-size: 21px;
         }
     }
     img{
         height: 160px;
     }
     h3{
         font-size: 20px;
     }
 }
 .price-info{
     .price-title, .price, span{
         font-size: 16px !important;
     }
 }
 .box-action{
     button{
         padding: 3px 24px;
         font-size: 15px;

     }

  
 }
 }
 @media only screen and (max-width: 284px){
     .cart-box{
     max-width: 260px;

     .add__like-btn{
         span{
             font-size: 22px;
         }
     }
     img{
         height: 150px;
     }
     h3{
         font-size: 19px;
     }
 }
 .price-info{
     .price-title, .price, span{
         font-size: 16px !important;
     }
 }
 .box-action{
     button{
         padding: 2px 22px;
         font-size: 15px;

     }

  
 }
 .empty__cart-wrapper{
    h2{
        font-size: 26px;
        line-height: 36px;
    }
    span{
        font-size: 48px;
    }
    .cart__shopping-link{
        padding: 1px 0;
        max-width: 210px;
        font-size: 18px;
    }
 }
 }
 @media only screen and (max-width: 218px){
    .cart-wrapper{
        justify-items: center;
    }
     .cart-box{
     max-width: 228px;

     .add__like-btn{
         span{
             font-size: 22px;
         }
     }
     img{
         height: 140px;
     }
     h3{
         font-size: 18px;
     }
 }
 .price-info{
     .price-title, .price, span{
         font-size: 15px !important;
     }
 }
 .box-action{
     button{
         padding: 2px 16px;
         font-size: 15px;

     }

  
 }
 }
</style>