<template>
    <Hero/>
    <Models/>
    <Carousel/>
    <About/>
    <Contact/>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Carousel from "@/components/Carousel.vue";
import Models from "@/components/Models.vue"
import Contact from "@/components/Contact.vue";
import About from "@/components/About.vue";
export default {
  
    components: {
    Hero,
    Carousel,
    Models,
    Contact,
    About
}
}
</script>

