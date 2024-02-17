<script setup>
import Container from '@/utils/Container.vue';
import { RouterLink } from 'vue-router';
import json from '../database/products.json'
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
    h2 {
        color: #000;
        width: 200px;
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
        // font-weight: 500;
    }
}

.swiper-container {
    width: 1000px;
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

.service__content-wrapper {
    margin-top: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.service-content {
    h2 {
        width: 558px;
        font-size: 40px;
        font-weight: 600;
        font-family: var(--saira-font);
        line-height: 52px;
        color: var(--muted-text-color);

    }

    p {
        width: 570px;
        font-size: 19px;
        font-family: var(--saira-font);
        line-height: 34px;
        margin-top: 40px;
        color: var(--muted-text-color);
    }
}

.service-image {
    width: 554px;
    height: 400px;

    img {
        width: 100%;
        height: 100%;
    }
}</style>