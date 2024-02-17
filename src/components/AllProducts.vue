<script setup>
import Container from '@/utils/Container.vue';
import Products from '@/database/products.json'
console.log(Products.items.products);

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
                <div v-for="product in Products.items.products" class="product__card">
                    <img :src="product.image">
                    <button class="add-btn"><span class="material-symbols-outlined">add</span></button>
                    <h4>{{product.name}}</h4>
                    <div class="price-info">
                        <strong>${{product.price}}</strong>
                        <span>$500</span>
                    </div>
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
    width: 270px;
    // height: 320px;
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
</style>