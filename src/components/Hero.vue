<template>
    <Nav/>
    <header>
        <img src="../assets/hero_banner.png" >
    </header>
</template>


<script>
import Nav from './Nav.vue';
    export default {
        components: {
            Nav
        }
    }
</script>

<style scoped>
    header{
        width: 100%;
        position: absolute;
        min-height: 850px;
        top: 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>