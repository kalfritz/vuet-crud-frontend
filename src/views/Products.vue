<template lang="html">
   <v-layout row wrap>
    <v-flex xs12 md4 v-for="product in products" :key='product.id'>
      <v-card>
        <v-img
          :src= "product.image"
          aspect-ratio= '2.75'
          height= '25vh'
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{product.title}}</h3>
            <div> {{product.description}} </div>
            <h4>${{product.price}}</h4>
            <small>{{product.quantity}} in stock</small>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn :to="{name: 'Product', params: {id: product._id}}" flat color="orange">View</v-btn>

        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import API from "../lib/API.js";

export default {
  name: "Products",
  data: () => ({
    products: []
  }),
  async mounted() {
    const products = await API.getProducts();
    this.products = products;
  }
};
</script>

<style>
</style>
