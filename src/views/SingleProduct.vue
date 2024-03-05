<script >
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Container from '@/utils/Container.vue';
import Products from '@/database/products.json'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';

export default {
  components: { Swiper, SwiperSlide },
        
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
  data() {
    return {
      singleProduct: {}
    }
  },
  methods:{
          addCart(){
            this.$store.commit('addData', this.singleProduct)
          },
          removeCart(index){
            this.$store.commit('removeCart', index)
          }
        },

  mounted() {
    if (Products.items.products.filter(f => f.id === this.$route.params.product_id)) {
      this.singleProduct = Products.items.products.find(f => f.id == this.$route.params.product_id)
    }
    else { console.log(false); }
  }
}
</script>


<template>
  <Container>
    <div class="single__product-wrapper">
      <div class="product-image">
        <img :src="singleProduct.image">
      </div>
      <div class="single__product-content">
        <h2>{{ singleProduct.name }}</h2>
        <div class="feedback-action">

          <div class="stars">
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
          </div>
          <p>(15 customer reviews)</p>
        </div>

        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quas sint fugiat officia
          voluptatem debitis vitae iure quis officiis perspiciatis nobis corporis expedita consequuntur temporibus
          distinctio aperiam reprehenderit sequi quidem </p>
        <hr>
        <div class="price-info">
          <p> $ {{ singleProduct.price }} USD</p>
          <strong>$500 USD</strong>
        </div>
        <div class="btns-action">
          <button v-if="this.$store?._state?.data?.cart_data?.findIndex(item => item.id === this.singleProduct.id) === -1"  @click="addCart" class="add__cart-btn"> <span class="material-symbols-outlined">shopping_cart</span> Add to cart</button>
          <button  v-else  @click="removeCart(this.singleProduct)" class="add__cart-btn"> <span class="material-symbols-outlined">delete</span> Remove </button>
          <button class="add__wishlist-btn"> <span class="material-symbols-outlined">favorite</span> Add to
            Wishlist</button>

        </div>
      </div>
    </div>
    <div class="product__category-wrapper">
      <h2 class="category-title">Trending Furnitures</h2>
      <swiper :spaceBetween="60" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :pagination="{ clickable: true, }" :modules="modules" class="mySwiper category-swiper">
        <swiper-slide class="category-slide" v-for="(prod, index) in Products?.items?.products" :key="index">
          <div class="category-image">
            <img :src="prod.image" alt="">
            <button class="category__like-btn"><span class="material-symbols-outlined">favorite</span></button>
          </div>
          <div class="slide-header">
            <h4>{{ prod.name }}</h4>
            <div class="stars">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>
          </div>
          <p class="category-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex harum maiores
            est delectus ullam.</p>
          <div class="category__card-price">
            <p>${{ prod.price }} USD</p>
            <strong>$200 USD</strong>
          </div>
        </swiper-slide>

      </swiper>
    </div>
  </Container>
</template>






<style lang="scss">
.single__product-wrapper {
  display: flex;
  justify-content: space-evenly;
  column-gap: 50px;
  margin: 2rem 0;
  width: 100%;




}

.product-image {
  max-width: 450px;
  height: 440px;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.single__product-content {
  h2 {
    font-size: 44px;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    max-width: 550px;
  }
}

.feedback-action {
  margin-top: 12px;
  display: flex;
  column-gap: 10px;

  .stars {
    span {
      color: gold;
    }
  }

  p {
    color: #1d1c1c !important;
    font-size: 16px !important;
  }
}

.description {
  margin: 16px 0;
}

.price-info {
  margin-top: 20px;
  display: flex;
  align-items: center;
  column-gap: 20px;

  p {
    font-size: 22px !important;
    font-weight: 600 !important;
  }

  strong {
    text-decoration: line-through;
    font-size: 17px;
    color: #474646a9;
  }
}

.btns-action {
  display: flex;
  align-items: center;
  column-gap: 30px;
  margin-top: 25px;

  button {
    display: flex;
    align-items: center;
    column-gap: 10px;
    border: none;
    border-radius: 5px;
    padding: 8px 20px;
    font-size: 18px;
    transition: 0.2s;
  }
}

.add__cart-btn {
  background-color: var(--success-color);
  color: #fff;


  &:hover {
    cursor: pointer;
    background-color: #205552;
  }

  &:active {
    transform: scale(0.95);
  }
}

.add__wishlist-btn {

  background-color: #fff;
  color: #205552;
  border: 1px solid #205552 !important;
  padding: 8px 15px !important;

  &:hover {
    background-color: var(--success-color);
    color: #fff;
    cursor: pointer;
  }
}

// -------- CETEGORY SWIPER STYLES
.product__category-wrapper {
  width: 100%;
  margin-bottom: 50px;
  margin-top: 120px;
}

.category-title {
  font-size: 40px;
  margin-bottom: 40px;
}

.category-swiper .swiper-slide {
  height: fit-content !important;
}

.product__category-wrapper .category-slide {
  width: 350px !important;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  border: 1px solid #eee;
  padding: 15px;

  .category-image {
    position: relative;
    width: 100% !important;
    padding: 10px;

    img {
      width: 100%;
      height: 300px;
    }

    .category__like-btn {
      position: absolute;
      top: 0px;
      right: 0px;
      background-color: transparent;
      border: none;

      span {
        font-size: 28px;
        cursor: pointer;
      }
    }
  }
}

.slide-header {
  display: flex !important;
  justify-content: space-between !important;

  h4 {
    font-size: 23px;
  }

  .stars {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      color: gold;
    }
  }
}

.category-description {
  font-size: 15px;
  margin-top: 10px;
  line-height: 21px;
}

.category__card-price {
  display: flex;
  align-items: center;
  column-gap: 15px;
  margin-top: 15px;

  p {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  strong {
    font-size: 15px;
    color: #696767;
    font-weight: 500;
    text-decoration: line-through;
  }
}

@media only screen and (max-width: 1100px) {
  .single__product-content {
    h2 {
      font-size: 42px !important;
    }

    p {
      font-size: 15px;
      max-width: 510px;
    }
  }
}

@media only screen and (max-width: 1028px) {
  .product-image {
    max-width: 400px;
    height: 400px;
    padding: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

.price-info {
  column-gap: 20px;

  p {
    font-size: 21px !important;
  }

  strong {
    font-size: 16px;
  }
}
  .btns-action {
    button {
      column-gap: 8px;
      padding: 7px 18px;
      font-size: 17px;
    }

    .add__wishlist-btn {
      padding: 7px 13px !important;

    }
  }
}
  @media only screen and (max-width: 928px){
    .product-image {
    max-width: 410px;
    height: 370px;
    padding: 10px;
  }
    .single__product-content {
    h2 {
      font-size: 40px !important;
    }

    p {
      font-size: 15px;
      line-height: 20px;
    }
  }
  }
  @media only screen and (max-width: 830px){
    .product-image {
    max-width: 370px;
    height: 350px;
    padding: 10px;
  }
    .single__product-content {
    h2 {
      font-size: 38px !important;
    }

    p {
      font-size: 15px;
      line-height: 19px;
    }
  }
  .feedback-action {
  margin-top: 12px;
  display: flex;
  align-items: center;
  column-gap: 10px;

  .stars {
    span {
      color: gold;
      font-size: 20px;
    }
  }

  p {
    color: #1d1c1c !important;
    font-size: 16px !important;
  }
}
  .price-info {
  p {
    font-size: 20px !important;
  }

  strong {
    font-size: 15px;
  }
}
  .btns-action {
    button {
      column-gap: 8px;
      padding: 7px 16px;
      font-size: 17px;
    }

    .add__wishlist-btn {
      padding: 6px 11px !important;

    }
  }
  }
  @media only screen and (max-width: 742px){
    .product-image {
    max-width: 370px;
    height: 360px;
    padding: 10px;
  }
    .single__product-content {
    h2 {
      font-size: 33px !important;
    }

    p {
      font-size: 14px;
      line-height: 18px;
      max-width: 330px;
    }
  }
  .feedback-action {
  margin-top: 12px;
  display: flex;
  align-items: center;
  column-gap: 10px;

}
  .price-info {
  p {
    font-size: 19px !important;
  }

  strong {
    font-size: 15px;
  }
}
  .btns-action {
    button {

      column-gap: 2px;
      padding: 8px 10px;
      font-size: 14px;
      span{font-size: 17px;}
    }

    .add__wishlist-btn {
      padding: 6px 11px !important;

    }
  }
  }
  @media only screen and (max-width: 707px){
    .product-image {
    max-width: 300px !important;
    height: 360px;
    padding: 10px;
  }
    .single__product-content {
      
    h2 {
      font-size: 36px !important;
    }

    p {
      font-size: 14px;
      line-height: 18px;
      max-width: 320px;
    }
  }
  .feedback-action {
  margin-top: 10px;
  display: flex;
  column-gap: 10px;

  .stars {
    span {
      color: gold;
      font-size: 20px;
    }
  }

  p {
    color: #1d1c1c !important;
    font-size: 15px !important;
  }
}
  .price-info {
  p {
    font-size: 18px !important;
  }

  strong {
    font-size: 14px;
  }
}
  .btns-action {
    column-gap: 18px;
    button {

      column-gap: 2px;
      padding: 9px 15px;
      font-size: 14px;
      span{font-size: 17px;}
    }

    .add__wishlist-btn {
      padding: 7px 11px !important;

    }
  }
  }

  @media only screen and (max-width: 663px){
    .product-image {
    max-width: 300px !important;
    height: 340px;
  }
    .single__product-content {

    h2 {
      font-size: 30px !important;
    }

    p {
      font-size: 13px;
      line-height: 17px;
      max-width: 260px;
    }
  }
  .feedback-action {
  margin-top: 10px;
  display: flex;
  column-gap: 10px;

  .stars {
    span {
      margin-top:7px;
      font-size: 20px;
    }
  }

  p {
    font-size: 14px !important;
  }
}
  .price-info {
  p {
    font-size: 18px !important;
  }

  strong {
    font-size: 14px;
  }
}
  .btns-action {
    column-gap: 15px;
    button {

      column-gap: 2px;
      padding: 9px 15px;
      font-size: 14px;
      span{font-size: 17px;}
    }

    .add__wishlist-btn {
      padding: 5px 11px !important;

    }
  }
  }
  @media only screen and (max-width: 623px){
    .single__product-wrapper{
      column-gap: 15px;
    }
    .product-image {
    max-width: 250px !important;
    height: 350px;
  }
    .single__product-content {

    h2 {
      font-size: 26px !important;
    }

    p {
      font-size: 13px;
      line-height: 17px;
      max-width: 260px;
    }
  }
  .feedback-action {
  margin-top: 10px;
  column-gap: 6px;

  .stars {
    span {
      margin-top:7px;
      font-size: 18px;
    }
  }

  p {
    font-size: 14px !important;
  }
}
  .price-info {
  p {
    font-size: 17px !important;
  }

  strong {
    font-size: 13px;
  }
}
  .btns-action {
    column-gap: 15px;
    button {

      column-gap: 2px;
      padding: 7px 8px;
      font-size: 13px;
      span{font-size: 16px;}
    }

    .add__wishlist-btn {
      padding: 5px 11px !important;

    }
  }
  }
  @media only screen and (max-width: 518px){
    .single__product-wrapper{
      padding: 2rem;
      margin: auto;
      flex-direction: column;
    }
    .product-image {
    max-width: 420px !important;
    height: 380px;
  }
    .single__product-content {
      text-align: left !important;
    h2 {
      margin-top: 10px;
      font-size: 32px !important;
    }

    p {
      font-size: 15px;
      line-height: 24px;
      max-width: 420px;
    }
  }
  .feedback-action {
    display: none;
}
  .price-info {
  p {
    font-size: 24px !important;
  }

  strong {
    font-size: 18px;
  }
}
  .btns-action {
    column-gap: 15px;
    button {

      column-gap: 2px;
      padding: 10px 30px;
      font-size: 18px;
      span{font-size: 16px;}
    }

    .add__wishlist-btn {
      padding: 9px 11px !important;

    }
  }
  }
  @media only screen and (max-width: 414px){
  
    .product-image {
    max-width: 400px !important;
    height: 350px;
  }
    .single__product-content {
      text-align: left !important;
    h2 {
      margin-top: 15px;
      font-size: 32px !important;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      max-width: 400px;
    }
  }
  .feedback-action {
    display: none;
}
  .price-info {
  p {
    font-size: 22px !important;
  }
  strong {
    font-size: 17px;
  }
}
  .btns-action {
    column-gap: 15px;
    button {

      column-gap: 2px;
      padding: 7px 13px;
      font-size: 15px;
      span{font-size: 16px;}
    }

    .add__wishlist-btn {
      padding: 6px 13px !important;

    }
  }
  }

  @media only screen and (max-width: 356px){
  
  .product-image {
  max-width: 350px !important;
  height: 350px;
}
  .single__product-content {
    text-align: left !important;
  h2 {
    margin-top: 15px;
    font-size: 28px !important;
  }

  p {
    font-size: 13px;
    line-height: 18px;
    max-width: 400px;
  }
}
.price-info {
p {
  font-size: 20px !important;
}
strong {
  font-size: 16px;
}
}
.btns-action {
  column-gap: 15px;
  button {

    column-gap: 2px;
    padding: 5px 9px;
    font-size: 13px;
    span{font-size: 14px;}
  }

  .add__wishlist-btn {
    padding: 4px 7px !important;

  }
}
}

@media only screen and (max-width: 314px){
  
  .product-image {
  height: 280px;
}
  .single__product-content {
    text-align: left !important;
  h2 {
    margin-top: 15px;
    font-size: 24px !important;
  }

  p {
    font-size: 12px;
    line-height: 18px;
    max-width: 400px;
  }
}
.price-info {
p {
  font-size: 20px !important;
}
strong {
  font-size: 16px;
}
}
.btns-action {
  column-gap: 10px;
  button {

    column-gap: 2px;
    padding: 5px 9px;
    font-size: 12px;
    span{font-size: 13px;}
  }

  .add__wishlist-btn {
    padding: 4px 7px !important;

  }
}
}

@media only screen and (max-width: 281px){
  
  .product-image {
  height: 230px;
}
  .single__product-content {
  h2 {
    font-size: 24px !important;
  }

  p {
    font-size: 11px;
    line-height: 16px;
    max-width: 280px;
  }
}
.price-info {
p {
  font-size: 17px !important;
}
strong {
  font-size: 14px;
}
}
.btns-action {
  flex-direction: column;
  column-gap: 10px;
  button {

    column-gap: 2px;
    padding: 7px 50px;
    font-size: 12px;
    span{font-size: 13px;}
  }

  .add__wishlist-btn {
    margin-top: 10px;
    padding: 6px 37px !important;

  }
}
}

</style>

<!-- $route.query.query_name => Bu orqali querydan yuborilgan ma'lumotni olish mumkin -->
<!-- $route.params.id => Bu propsdan yuborilgan ma'lumot (id) oladi. Asosan, Single page uchun -->