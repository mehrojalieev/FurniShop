<script setup>
import { RouterLink } from 'vue-router';
import json from '../database/products.json'
import Container from '@/utils/Container.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

</script>
<template>
    <Container>
        <div class="carousel">
            <div class="content">
                <h2>New In Store Now</h2>
                <p>Get the latest items immediately with promo prices</p>
                <router-link to="/" class="shop-link">Shop All</router-link>
            </div>
            <div class="swiper-container">
                <swiper
                 autoplay="true"
                   :loop="true"
                    space-between="50"
                     class="mySwiper"
                     :autoplay="{
                            delay: 2000,
                            disableOnInteraction: false,
                                }"
                     >
                    <swiper-slide v-for="i in json.items.trending_furniture" class="swiper-slide">
                        <img :src="i.image">
                        <h3>{{ i.name }}</h3>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <div class="service__content-wrapper">
            <div class="service-content">
                <h2>The Best Furniture Manufacturer of your choice</h2>
                <p>
                    Furnitre power is a software as services for multiperpose business management system, expecially for
                    them who are running two or more business exploree the future Furnitre power is a software as services.
                </p>
            </div>

            <div class="service-image">
                <img src="../assets/serviceContent.png">
            </div>
        </div>

    </Container>
</template>


<script >
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>


<style lang="scss" >
.carousel {
    display: flex;
    column-gap: 70px;
    width: 100%;
    height: 400px;
    margin-top: 170px;
}

.content {
    max-width: 200px;
    h2 {
        color: #000;
        line-height: 52px;
        font-size: 40px;
        font-weight: 600;
    }

    p {
        margin: 80px 0 48px 0;
        letter-spacing: 0.2px;
        width: 200px;
        line-height: 27px;
        font-size: 16px;
        font-weight: 400;
    }

    .shop-link {
        font-size: 16px;
        color: var(--secondary-color);
    }
}

.swiper-container {
    max-width: 1000px;
    overflow: hidden;
}

.mySwiper {
    display: flex;
    column-gap: 50px;
}

.swiper-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    height: 400px;
}

.swiper-slide {
    position: relative;
    min-width: 270px !important;
    height: 400px !important;
    border-radius: 5px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition: 0.3s;

        &:hover {
            cursor: pointer;
            opacity: 0.9;
        }
    }

    h3 {
        position: absolute;
        bottom: 10px;
        left: 80px;
        color: #fff;
        letter-spacing: 0.3px;
        font-size: 28px;
        font-weight: 600;
    }
}

// SERVICE COMPONENT STYLES
.service__content-wrapper {
    margin-top: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;
    width: 100%;
}

.service-content {
    h2 {
        max-width: 558px;
        font-size: 40px;
        font-weight: 600;
        font-family: var(--saira-font);
        line-height: 52px;
        color: var(--muted-text-color);

    }

    p {
        max-width: 570px;
        font-size: 19px;
        font-family: var(--saira-font);
        line-height: 34px;
        margin-top: 40px;
        color: var(--muted-text-color);
    }
}

.service-image {
    max-width: 554px;
    height: 400px;

    img {
        border-radius: 7px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}


// -------------- COMPONENT RESPONSIVE CODES -----------------

@media only screen and (max-width: 968px){
    .content{
        max-width: 180px;
        h2{
            font-size: 36px;
            line-height: 48px;
        }
        p {
        margin: 50px 0 48px 0;
        letter-spacing: 0.2px;
        line-height: 25px;
        font-size: 16px;
        font-weight: 400;
    }
    }
    .swiper-container {
    max-width: 800px !important;
}
.swiper-slide {
    min-width: 250px !important;
    height: 380px !important;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    h3 {
        font-size: 26px;
    }
}

.service-content {
    h2 {
        max-width: 558px;
        font-size: 37px;
        line-height: 50px;

    }

    p {
        max-width: 420px !important;
        font-size: 17px;
        line-height: 28px;
        margin-top: 28px;
    }
}


}
@media only screen and (max-width: 904px){
    .service-content {
    h2 {
        max-width: 550px;
        font-size: 35px;
        line-height: 48px;

    }

    p {
        max-width: 420px !important;
        font-size: 17px;
        line-height: 26px;
        margin-top: 28px;
    }
}
}
@media only screen and (max-width: 768px){
    .content{
        max-width: 160px;
        h2{
            font-size: 33px;
            line-height: 44px;
        }
        p{
        line-height: 24px;
        font-size: 16px;
        }
    }
    .swiper-slide{
        min-width: 220px !important;
        height: 360px;
        h3{
            font-size: 24px;
            left: 70px;
        }
    }
    .service-content {
    h2 {
        max-width: 558px;
        font-size: 32px;
        line-height: 46px;

    }

    p {
        max-width: 320px !important;
        font-size: 16px;
        line-height: 26px;
        margin-top: 28px;
    }
}
}
@media only screen and (max-width: 714px){
    .service-content {
    h2 {
        max-width: 558px;
        font-size: 30px;
        line-height: 46px;

    }

    p {
        max-width: 300px !important;
        font-size: 16px;
        line-height: 24px;
    }
}
.service-image {
    max-width: 534px;
    height: 360px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
}
@media only screen and (max-width: 678px){
    .carousel{
        display: block;
    }
    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 600px;
        column-gap: 20px;
        h2{
            font-size: 33px;
        }
        p{
            width: 300px ;
            font-size: 18px;
            line-height: 28px;
        }
    }
    .shop-link{
        display: none;
    }
    .service__content-wrapper{
        margin-top: 220px;
    }
    .service-content {
    h2 {
        max-width: 558px;
        font-size: 28px;
        line-height: 42px;

    }

    p {
        max-width: 290px !important;
        font-size: 16px;
        line-height: 22px;
    }
}
}
@media only screen and (max-width: 534px) {
    .service__content-wrapper{
        margin-top: 260px;
    }
    .service-content {
    h2 {
        max-width: 558px;
        font-size: 24px;
        line-height: 38px;

    }

    p {
        max-width: 290px !important;
        font-size: 14px;
        line-height: 22px;
    }
}
.service-image {
    width: 500px;
    height: 300px;
}
}
@media only screen and (max-width: 500px){
    .content{
        column-gap: 40px;
        h2{
            font-size: 26px;
            line-height: 34px;
        }
        p{
            width: 400px ;
            font-size: 16px;
            line-height: 26px;
        }
    }
}
@media only screen and (max-width: 478px) {
    .service__content-wrapper{
        flex-direction: column;
    }
    .service-content {
    h2 {
        font-size: 28px;
        line-height: 42px;

    }

    p {
        max-width: 460px !important;
        font-size: 16px;
        line-height: 25px;
    }
}
.service-image {
    margin-top: 20px;
    max-width: 415px;
    height: 300px;
    padding: 0 10px;

    img {
        border-radius: 7px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
}
@media only screen and (max-width: 450px){
    .content{
        column-gap: 30px;
        h2{
            width: 300px;
            font-size: 24px;
            line-height: 34px;
        }
        p{
            font-size: 14px;
            line-height: 22px;
        }
    }
    .service-content {
    h2 {
        font-size: 26px;
        line-height: 42px;

    }

    p {
        margin-top: 15px;
        font-size: 16px;
        line-height: 24px;
    }
}
}
@media only screen and (max-width: 400px){
    .service-image{
        max-width: 390px;
    }
}
@media only screen and (max-width: 360px){
    .content{
        column-gap: 30px;
        h2{
            width: 320px;
            font-size: 24px;
            line-height: 32px;
        }
        p{
            font-size: 14px;
            line-height: 20px;
        }
    }
    .swiper-slide{
        min-width: 210px !important;
        height: 320px !important;
        h3{
            font-size: 22px;
            left: 60px;
        }

    }
    .service-content {
    h2 {
        font-size: 22px;
        line-height: 38px;

    }

    p {
        margin-top: 10px;
        font-size: 14px;
        line-height: 20px;
    }
}
.service-image{
    height: 240px;
}
}
@media only screen and (max-width: 338px){
    .content{
        column-gap: 50px;
        h2{
            width: 320px;
            font-size: 20px;
            line-height: 30px;
        }
        p{
            font-size: 14px;
            line-height: 20px;
        }
    }
    .swiper-slide{
        min-width: 220px !important;
        height: 320px !important;
        h3{
            font-size: 24px;
        }

    }
    .service-content {
    h2 {
        font-size: 21px;
        line-height: 30px;

    }

    p {
        margin-top: 12px;
        font-size: 14px;
        line-height: 18px;
    }
}
.service-image{
    height: 210px;
}
}
</style>