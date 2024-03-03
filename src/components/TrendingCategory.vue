<script>
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  import json from '../database/products.json';
console.log(json);
    export default {
        components:{
            Swiper,
      SwiperSlide,
        },
        setup(){
            return {
                modules: [Autoplay, Pagination, Navigation],
            }
        }
    }
</script>


<template>
    <div class="trending__category-wrapper">
        <swiper
    :spaceBetween="40"
    :slidesPerView="2"
    :centeredSlides="false"
    :autoplay="{
      delay: 22500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide  >Slide 1
    </swiper-slide>
  </swiper>
    </div>
</template>



<style lang="scss" scoped>
.trending__category-wrapper{
    width: 100%;
    .swiper {
  width: 100%;
  height: auto;
  padding: 5px;
}

.swiper-slide {
    max-width: 700px;
    height: 300px;
  text-align: center;
  font-size: 18px;
  border-radius: 20px;
  box-shadow: 0 0 5px gray;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

}
.swiper-button-prev{
    display: none !important;
    color: red  !important;
}
</style>