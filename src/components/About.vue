<script setup>
import Container from '@/utils/Container.vue';
import Comments from "../database/comments.json"
console.log(Comments.people_comments);
</script>
<template>
    <Container>
        <div id="about" class="about-wrapper">
            <div class="about-content">
                <h2>What people are saying about us</h2>
                <swiper
                    :spaceBetween="40"
                    :centeredSlides="true"
                    :autoplay="{
                      delay: 2500,
                      disableOnInteraction: false,
                    }"
                     :pagination="{
                      clickable: true,
                    }"
                    :modules="modules"
                    class="mySwiper"
                 >
    <swiper-slide class="swiper-slide" v-for="comment in Comments.people_comments">
        <div class="user-header">
            <img  :src="comment.avatar" alt="User Avatar">
            <div class="user-info">
                <h5>{{comment.username}}</h5>
                <p >{{comment.user_job}}</p>
            </div>
        </div>
        <p class="user-comment">{{comment.description}}</p>
    </swiper-slide>
    
 

  </swiper>
            </div>
            <div class="about-image">
                <img src="../assets/about_image.png" alt="About Picture">
            </div>
        </div>
    </Container>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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




<style lang="scss">
    .about-wrapper{
        margin-top: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        column-gap: 50px;
    }
    .about-content{
        h2{
            font-size: 38px;
            color: var(--muted-text-color);
            font-weight: 600;
        }
    }
    .mySwiper{
        overflow-x: auto;
        &::-webkit-scrollbar{
            appearance: none;
        }

    }
    .about-wrapper .swiper-wrapper{
        display: flex;
        max-width: 570px;
    }
    .about-wrapper .swiper-slide{
        min-width: 570px !important;
        padding: 10px 20px;
    }
    .user-header{
        width: 100%;
        display: flex;
        column-gap: 20px;
        margin-top: 40px;
        img{
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 50%;
        }
        .user-info{
            h5{
                font-size: 20px;
                color: var(--muted-text-color);
                font-weight: 600;
            }
            p{
                font-size: 14px;
                color: var(--muted-text-color);
                font-weight: 400;
            }
        }
    }
    .user-comment{
        width: 570px;
        color: var(--muted-text-color);
        font-size: 20px;
        line-height: 34px;
    }

    .about-image{
        width: 560px;
        height: 340px;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>