<template>
  <ProductForm :product="product" :onSubmit="submit" :msg="msg"></ProductForm>
</template>

<script>
import API from "../lib/API";
import ProductForm from "../components/ProductForm";

export default {
  components: {
    ProductForm
  },
  data: () => ({
    product: {
      title: "",
      description: "",
      price: "0",
      quantity: "0",
      image: ""
    },
    msg: "Create a new Product"
  }),
  methods: {
    async submit() {
      const result = await API.createProduct(this.product);
      this.$router.push({
        name: "Product",
        params: { id: result._id }
      });
    }
  }
};
</script>

<style>
</style>
