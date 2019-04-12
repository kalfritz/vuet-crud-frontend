<template>
  <v-layout>
    <v-flex xs12>
      <h1>{{msg}}</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          label="Title"
          required
          v-model="product.title"
          validate-on-blur
          :rules="titleRules"
        ></v-text-field>
        <v-textarea label="Description" required v-model="product.description"></v-textarea>
        <v-text-field label="Price" required v-model="product.price" prefix="$" :rules="priceRules"></v-text-field>
        <v-text-field label="Quantity" required v-model="product.quantity" :rules="quantityRules"></v-text-field>
        <v-text-field label="Image" required v-model="product.image" :rules="imageRules"></v-text-field>

        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["product", "onSubmit", "msg"],
  name: "ProductForm",
  data: () => ({
    valid: false,
    titleRules: [
      title => {
        if (!title || title.trim() === "") return "Title must not be empty.";
        return true;
      }
    ],
    priceRules: [
      price => {
        if (isNaN(price)) return "Price must be a valid number.";
        if (Number(price) <= 0) return "Price must be greater than $0";
        return true;
      }
    ],
    quantityRules: [
      quantity => {
        if (isNaN(quantity)) return "Quantity must be a valid number.";
        if (Number(quantity) < 0) return "Quantity must be 0 or greater.";
        return true;
      }
    ],
    imageRules: [
      image => {
        if (!image || image.trim() === "") return "Image must not be empty.";
        return true;
      }
    ]
  }),
  methods: {
    async submit() {
      if (this.valid) {
        this.onSubmit();
      }
    },

    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
</style>
