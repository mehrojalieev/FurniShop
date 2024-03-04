<script setup>
import Container from '@/utils/Container.vue';
import Products from '@/database/products.json'
import { RouterLink } from 'vue-router';

</script>


<template>
    <Container>
        <div class="allproduct-wrapper">
            <div class="allproduct__header">
                <h2>All Product</h2>
                <p>
                    The products we provide only for you as our service are selected from the
                    best products with number 1 quality in the world
                </p>
            </div>
            <div class="products__card-container">
                <div v-for="product in Products.items.products" :key="product.id" class="product__card">
                    <router-link
                    class="product__card-link"
                     :to="{
                         name: 'Single_Product',
                         query: {product_name: product.name},
                         params: {product_id:  `${product.id}` }
                          }"
                     >
                    <img :src="product.image">
                    
                    <button class="add-btn"><span class="material-symbols-outlined">add</span></button>
                    <h4>{{product.name}}</h4>
                    <div class="price-info">
                        <strong>${{product.price}}</strong>
                        <span>$500</span>
                    </div>
                </router-link>
                </div>
            </div>
        </div>
    </Container>
</template>




<style scoped lang="scss">
.allproduct-wrapper {
    width: 100%;
    margin-top: 100px;
}

.allproduct__header {
    text-align: center;
    h2{
        font-size: 40px;
        color: var(--muted-text-color);
        font-weight: 600;
    }
    p{
        font-size: 16px;
        color: var(--muted-text-color);
        line-height: 26px;
        font-weight: 400;
        margin-bottom: 15px;
        max-width: 540px;
        margin: auto;
    }
}
.products__card-container{
    width: 100%;
    margin-top: 60px;
    display: grid;
    gap: 30px 25px;
    grid-template-columns: repeat(4, 1fr);
}
.product__card{
    max-width: 270px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: relative;
    padding: 10px;
    text-align: center;
    transition: 0.3s;
    &:hover{
        cursor: pointer;
        transform: scale(1.03);
        opacity: 0.8;
    }
    img{
        width: 200px;
        height: 200px;
        object-fit: cover;
        object-position: center;
    }
    .add-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        border: none;
        border-radius: 50%;
        right: 14px;
        bottom: calc(25%);
        padding: 1px;
        background-color: #d9d9d9;
    }
    h4{
        margin-top: 10px;
        font-size: 24px;
        color: var(--muted-text-color);
        font-weight: 600;
        text-align: left;
    }
    .price-info{
        margin-top: 5px;
        display: flex;
        align-items: center;
        column-gap: 10px;
        strong{
            font-size: 16px;
            color: var(--muted-text-color);
            font-weight: 400;
        }
        span{
            font-size: 14px;
            opacity: 0.7;
            text-decoration: line-through;
        }
    }
}
.product__card-link{
    text-decoration: none;
}
@media only screen and (max-width:1000px){
    .product__card{
        max-width: 250px;
        img{
        width: 180px;
        height: 170px;
    }
        .add-btn{
            span{
                font-size: 22px !important;
            }
    }
    h4{
        font-size: 21px;
    }
    }
}
@media only screen and (max-width:920px){
    .product__card{
        max-width: 250px;
        img{
        width: 158px;
        height: 160px;
    }
        .add-btn{
            span{
                font-size: 20px !important;
            }
    }
    h4{
        margin-top: 15px;
        font-size: 20px;
    }
    }
}
@media only screen and (max-width:850px){
    .products__card-container{
        grid-template-columns: repeat(3, 1fr);
    }
    .product__card{
        img{
        width: 180px;
        height: 170px;
    }
        .add-btn{
            span{
                font-size: 24px !important;
            }
    }
    h4{
        margin-top: 15px;
        font-size: 22px;
    }
    }
}
@media only screen and (max-width:748px){
    .products__card-container{
        grid-template-columns: repeat(3, 1fr);
    }
    .product__card{
        img{
        width: 170px;
        height: 170px;
    }
        .add-btn{
            span{
                font-size: 22px !important;
            }
    }
    h4{
        font-size: 20px;
    }
    .price-info{
        margin-top: 10px;
        column-gap: 14px;
        strong{
            font-size: 16px;
            font-weight: 600;
        }
        span{
            font-size: 15px;
        }
    }
    }
}
@media only screen and (max-width:685px){
    .products__card-container{
        grid-template-columns: repeat(3, 1fr);
    }
    .product__card{
        img{
        width: 170px;
        height: 160px;
    }
        .add-btn{
            span{
                font-size: 20px !important;
            }
    }
    h4{
        font-size: 19px;
    }
    .price-info{
        margin-top: 8px;
        column-gap: 14px;
        strong{
            font-size: 15px;
            font-weight: 600;
        }
        span{
            font-size: 14px;
        }
    }
    }
}
@media only screen and (max-width:658px){
    .products__card-container{
        grid-template-columns: repeat(2, 1fr);
    }
    .product__card{
        max-width: 280px;
        img{
        width: 230px;
        height: 210px;
    }
        .add-btn{
            span{
                font-size: 23px !important;
            }
    }
    h4{
        font-size: 24px;
    }
    .price-info{
        margin-top: 12px;
        column-gap: 14px;
        strong{
            font-size: 17px;
            font-weight: 600;
        }
        span{
            font-size: 16px;
        }
    }
    }
}
@media only screen and (max-width:550px){
    .products__card-container{
        grid-template-columns: repeat(2, 1fr);
    }
    .allproduct__header {
    h2{
        font-size: 38px;
        color: var(--muted-text-color);
        font-weight: 600;
    }
    p{
        font-size: 15px;
        color: var(--muted-text-color);
        line-height: 24px;
        font-weight: 400;
        margin-bottom: 15px;
        max-width: 540px;
        margin: auto;
    }
}
    .product__card{
        max-width: 240px;
        img{
        width: 190px;
        height: 185px;
    }
        .add-btn{
            span{
                font-size: 21px !important;
            }
    }
    h4{
        font-size: 21px;
    }
    .price-info{
        margin-top: 12px;
        column-gap: 17px;
        strong{
            font-size: 16px;
        }
        span{
            font-size: 15px;
        }
    }
    }
}
@media only screen and (max-width:480px){
    .products__card-container{
        grid-template-columns: repeat(1, 1fr);
    }
    .allproduct__header {
    h2{
        font-size: 36px;
        color: var(--muted-text-color);
        font-weight: 600;
    }
    p{
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 15px;
        max-width: 400px;
    }
}
    .product__card{
        max-width: 450px;
        img{
        width: 100%;
        height: 340px;
    }
        .add-btn{
            span{
                font-size: 28px !important;
            }
    }
    h4{
        font-size: 24px;
    }
    .price-info{
        margin-top: 12px;
        column-gap: 17px;
        strong{
            font-size: 19px;
        }
        span{
            font-size: 16px;
        }
    }
    }
}
@media only screen and (max-width:480px){
 
    .allproduct__header {
    h2{
        font-size: 34px;
        color: var(--muted-text-color);
        font-weight: 600;
    }
    p{
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 15px;
        max-width: 400px;
    }
}
    .product__card{
        img{
        width: 100%;
        height: 240px;
    }
        .add-btn{
            span{
                font-size: 25px !important;
            }
    }
    h4{
        font-size: 22px;
    }
    .price-info{
        margin-top: 12px;
        column-gap: 17px;
        strong{
            font-size: 17px;
        }
        span{
            font-size: 15px;
        }
    }
    }
}
@media only screen and (max-width:284px){
 
    .allproduct__header {
    h2{
        font-size: 32px;
        color: var(--muted-text-color);
        font-weight: 600;
    }
    p{
        font-size: 13px;
        line-height: 18px;
    }
}
    .product__card{
        img{
        width: 100%;
        height: 200px;
    }
        .add-btn{
            span{
                font-size: 23px !important;
            }
    }
    h4{
        font-size: 20px;
    }
    .price-info{
        margin-top: 12px;
        column-gap: 17px;
        strong{
            font-size: 16px;
        }
        span{
            font-size: 15px;
        }
    }
    }
}
@media only screen and (max-width:256px){
 
    .allproduct__header {
    h2{
        font-size: 30px;
        color: var(--muted-text-color);
        font-weight: 600;
    }
    p{
        font-size: 13px;
        line-height: 16px;
        margin-top: 10px;
    }
}
    .product__card{
        img{
        width: 100%;
        height: 170px;
    }
        .add-btn{
            span{
                font-size: 21px !important;
            }
    }
    h4{
        font-size: 18px;
    }
    .price-info{
        margin-top: 12px;
        column-gap: 17px;
        strong{
            font-size: 15px;
        }
        span{
            font-size: 14px;
        }
    }
    }
}
@media only screen and (max-width:230px){
 
    .allproduct__header {
    h2{
        font-size: 28px;
        color: var(--muted-text-color);
        font-weight: 600;
    }
    p{
        font-size: 12px;
        line-height: 15px;
        margin-top: 7px;
    }
}
    .product__card{
        img{
        width: 100%;
        height: 140px;
    }
        .add-btn{
            span{
                font-size: 20px !important;
            }
    }
    h4{
        font-size: 16px;
    }
    .price-info{
        margin-top: 12px;
        column-gap: 15px;
        strong{
            font-size: 15px;
        }
        span{
            font-size: 14px;
        }
    }
    }
}
</style>