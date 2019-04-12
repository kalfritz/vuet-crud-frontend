import Vue from 'vue';
import Vuex from 'vuex';

import API from './lib/API.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    newProduct: {
      title: '',
      description: '',
      price: '',
      quantity: '',
      image: '',
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.product;
    },
  },
  actions: {
    async getProducts(context) {
      const products = await API.getProducts();
      context.commit('setProducts', products);
      console.log(products);
    },
    async getProduct(context, payload) {
      const product = await API.getProduct(payload);
      context.commit('setProduct', product);
      console.log(product);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
  },
});
