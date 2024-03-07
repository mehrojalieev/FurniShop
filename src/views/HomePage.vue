<template>
    <Nav/>
    <Hero/>
    <Models/>
    <TrendingCategory/>
    <Carousel/>
    <AllProducts/>
    <Contact/>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Carousel from "@/components/Carousel.vue";
import TrendingCategory from "@/components/TrendingCategory.vue";
import Models from "@/components/Models.vue"
import Contact from "@/components/Contact.vue";
import AllProducts from "@/components/AllProducts.vue";
import Nav from "@/components/Nav.vue";
export default {
  
    components: {
    Hero,
    Carousel,
    TrendingCategory,
    Models,
    Contact,
    AllProducts
}
}
</script>

