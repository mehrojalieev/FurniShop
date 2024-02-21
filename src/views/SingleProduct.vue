<script setup>
import Products from '@/database/products.json'

</script>

<template>
    <h1>SINGLE PRODUCT: {{$route.params.product_id}}</h1>
    <h2>Query: {{ $route.params.product_name }}</h2>
    <p vif>{{singleData.name}}</p>
    <strong>{{$store.getters.getCounter}}</strong>
    <button @click="increment">Increment</button>
</template>


<script>

export default {
  data() {
    return {
        singleData: null 
    }
  },

  created() {
    const productId = this.$route.params.product_id
    this.singleData = Products.items.products.filter(product => product.id != productId)
  },
  methods: {
    increment(){
        this.$store.commit('increment')
    }
  }
}
</script>


<!-- $route.query.query_name => Bu orqali querydan yuborilgan ma'lumotni olish mumkin -->
<!-- $route.params.id => Bu propsdan yuborilgan ma'lumot (id) oladi. Asosan, Single page uchun -->