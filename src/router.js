import Vue from 'vue';
import Router from 'vue-router';
import Landing from './views/Landing.vue';
import Products from './views/Products.vue';
import Product from './views/Product.vue';
import Create from './views/Create.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/products/create',
      name: 'Create',
      component: Create,
    },
    {
      path: '/products/edit',
      name: 'Edit',
      component: Edit,
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product,
    },
  ],
});
