const ProductsAPI = {
  async getProduct(link) {
    const res = await fetch(`/getproduct/${link}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  },
  async getProducts(type) {
    const res = await fetch(`/getproducts/${type}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  },
  async getCatalog() {
    const res = await fetch("/getcatalog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  },
};

export default ProductsAPI;
