<template>
  <v-layout row wrap>
    <v-flex xs8>
      <v-card>
        <v-img :src="product.image" height="60vh"></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{product.title}}</h3>
            <div>{{product.description}}</div>
            <h4>${{product.price}}</h4>
            <small>{{product.quantity}} in stock</small>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn
            :to="{
              name: 'Edit',
              params: {id: product._id }
          }"
            flat
            color="blue"
          >Edit</v-btn>
          <v-btn v-on:click="deleteProduct()" color="error">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import API from "../lib/API";

export default {
  name: "Product",
  data: () => ({
    product: {}
  }),

  async mounted() {
    const { id } = this.$route.params;
    const product = await API.getProduct(id);
    this.product = product;
  },
  methods: {
    async deleteProduct() {
      const { id } = this.$route.params;
      const res = await API.deleteProduct(id);
      console.log(res);
      this.$router.push({
        name: "Products"
      });
    }
  }
};
</script>

<style>
</style>
