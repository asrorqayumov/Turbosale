import axios from "./axios";

// auth
export function signUpRequest(data) {
  return axios.post("/auth/sign-up", data);
}

export function signInRequest(data) {
  return axios.post("/auth/sign-in", data);
}
// Products
export function GetProducts(page = 1) {
  return axios
    .get(`/products?page=${page}`)
    .then((res) => res.data)
    .catch((err) => err);
}
export function GetProduct(id) {
  return axios
    .get(`/products/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
}
export function CreateProductRequest(formData) {
  axios
    .post("/products", formData)
    .then((res) => res)
    .catch((err) => err);
}
// Categorys
export function GetCategorys() {
  return axios
    .get(`/categories`)
    .then((res) => res.data)
    .catch((err) => err);
}
export function CreateCategoryRequest(formData) {
  axios
    .post("/categories", formData)
    .then((res) => res)
    .catch((err) => err);
}

// Carts
export function GetCarts(id) {
  return axios
    .get(`/cart/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
}

export function CreateCart(data) {
  return axios
    .post(`/cart`, data)
    .then((res) => res.data)
    .catch((err) => err);
}
export function AddCart(id, data) {
  return axios
    .post(`/cart/${id}/add`, data)
    .then((res) => res.data)
    .catch((err) => err);
}

export function ClearCart(id) {
  return axios
    .delete(`/cart/${id}/empty`)
    .then((res) => res.data)
    .catch((err) => err);
}

export function RemoveCart(id, data) {
  return axios
    .put(`/cart/${id}/remove`, {
      id:id,
      items:data
    })
    .then((res) => res.data)
    .catch((err) => err);
}
