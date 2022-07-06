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
export function GetCarts() {
  return axios
    .get(`/cart`)
    .then((res) => res.data)
    .catch((err) => err);
}
