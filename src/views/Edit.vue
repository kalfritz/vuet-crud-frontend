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
    msg: "Edit Product"
  }),

  async mounted() {
    const { id } = this.$route.params;
    const res = await API.getProduct(id);
    this.product = res;
  },
  methods: {
    async submit() {
      const result = await API.updateProduct(this.product._id, this.product);
      this.$router.push({
        name: "Product",
        params: { id: this.product._id }
      });
    }
  }
};
</script>

<style>
</style>
