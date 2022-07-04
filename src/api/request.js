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

export function CreateProductRequest(file,data) {
  axios.post('/product',file,data)
}

export function GetCarts() {
  return axios
    .get(`/cart`)
    .then((res) => res.data)
    .catch((err) => err);
}

export async function GetUserById(id) {
  try {
    const res = await axios.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

