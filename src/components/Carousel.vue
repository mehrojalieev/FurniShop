
<template>
    <Container>
        <div class="carousel">
            <div class="content">
                <h2>New In Store Now</h2>
                <p>Get the latest items immediately with promo prices</p>
                <router-link class="shop-link">Shop All</router-link>
            </div>
            <div class="swiper-container">
                <swiper loop="true" space-between="20"  class="mySwiper">
                    <swiper-slide class="swiper-slide">
                        <img src="../assets/carousel_image1.png">
                        <h3>Chair</h3>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <img src="../assets/carousel_image2.png">
                        <h3>Bed</h3>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <img src="../assets/carousel_image3.png">
                        <h3>Cupboard</h3>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <img src="../assets/carousel_image1.png">
                        <h3>Lightning</h3>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </Container>
</template>


<script>
import Container from '@/utils/Container.vue';
import { RouterLink } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
    components: {
        Container,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {};
    },
}
</script>

<style lang="scss" >
.carousel {

    display: flex;
    column-gap: 70px;
    width: 100%;
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
        font-weight: 500;
    }
}

.swiper-container {
    width: 1000px;
    overflow: hidden;
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
    width: 270px !important;
    height: 400px !important;
    border-radius: 5px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s;
        &:hover{
            cursor: pointer;
            opacity: 0.9;
        }
    }
    h3{
        position: absolute;
        bottom: 10px;
        left: 80px;
        color: #fff;
        letter-spacing: 0.3px;
        font-size: 28px;
        font-weight: 600;
    }
}
</style>