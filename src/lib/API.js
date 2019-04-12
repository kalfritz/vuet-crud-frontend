const API_URL = 'https://vuetproducts.herokuapp.com/api/v1/products/';

export default {
  async getProducts() {
    const res = await fetch(API_URL);
    return res.json();
  },
  async getProduct(id) {
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
  },
  async createProduct(body) {
    const res = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return res.json();
  },
  async updateProduct(id, product) {
    const res = await fetch(`${API_URL}/${id}/edit`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    return res.json();
  },
  async deleteProduct(id) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  },
};
