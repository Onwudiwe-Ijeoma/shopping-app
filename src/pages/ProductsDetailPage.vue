<template>
  <div v-if="product">
    <h1>Products Details</h1>
    <div class="image-wrap">
      <img :src="product.imageName" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3>{{ product.price }}</h3>
      <p>{{ product.description }}</p>
      <button class="add-to-cart">Add To Cart</button>
    </div>
  </div>

  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import { products } from "@/temp-data";
import NotFoundPage from "./NotFoundPage.vue";
export default {
  name: "ProductsDetailsPage",
  data() {
    return {
      product: products.find(
        (product) => product.id === this.$route.params.productId
      ),
    };
  },

  components:{
NotFoundPage

  }
};
</script>
