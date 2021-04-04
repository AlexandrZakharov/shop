const ProductsAPI = {
  getProduct(link) {
    return fetch(`/getproduct/${link}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json())
  },
  getProducts(type) {
    return fetch(`/getproducts/${type}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json())
  }
}

export default ProductsAPI;