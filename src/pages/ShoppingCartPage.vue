<template>
  <h1>My Shopping Cart</h1>
  <div v-if="CartItems.length > 0">
    <div v-for="product in CartItems" :key="product.id" class="product-container">
    <img class="product-image" :src="product.imageName" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
    <button class="remove-button">Remove Item</button>
</div>
  <button class="checkout-button"> Proceed To Checkout</button>
  </div>
<div v-else-if="CartItems.length === 0">  
You currently have no items in your cart 
</div>
</template>

<script>
import { CartItems } from "@/temp-data";
export default {
  name: "ShoppingCartPage",

  data() {
    return {
      CartItems
    }
  },
};
</script>
