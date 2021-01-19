<template>
  <div class=" my-3">
    <div class="pa-8 bg-grey text-center">
      <h1>
        AGROSAVVY PRODUCTS
      </h1>
      <span class="subtitle-1">
        AgroSavvy is a leading supplier of agricultural products from Africa to customers around the world, especially in America, Asia and Europe. We have different grades of product and packaging and can accommodate most client’s needs.
      </span>
      <product-items></product-items>
    </div>
  </div>
</template>

<script>
import ProductItems from './ProductItems.vue'

export default {
  name: "ProductsPage",
  components: { ProductItems },
}
</script>
