<script setup>
  import HomePage from "./views/HomePage.vue"
  // import {RouterView} from 'vue-router'
</script>

<template>
  <!-- <router-view/> -->
  
  <HomePage/>
</template>


<script >
import Data from "./database/products.json"
console.log(Data);
  export default {
    data(){

    }
  }
</script>

