<template>
  <div>
    <sales-carousel></sales-carousel>
    <div class="container">
      <h1 class="themecolor">
        About Us
      </h1>
      <b>AgroSavvy is a Canada based business specializing in the sourcing and export of charcoal and agricultural produce from Africa to buyers around the world, specifically the Americas, Asia, and Europe. <a href="about">...read more</a> </b>
    </div>
    <div class="bg-grey">
      <h1 title="Check out our products" class="pt-3 text-center text-uppercase">products</h1>
      <product-items></product-items>
    </div>
    <quality-assurance></quality-assurance>
  </div>
</template>

<script>
import SalesCarousel from '../components/SalesCarousel.vue'
import ProductItems from '../components/ProductItems.vue'
import QualityAssurance from '../components/QualityAssurance.vue'

export default {
  name: "Home",
  components: { SalesCarousel, ProductItems, QualityAssurance },

}
</script>
