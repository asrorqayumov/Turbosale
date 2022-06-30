import axios from "./axios";

export function signUpRequest(data) {
  return axios.post("/auth/sign-up", data);
}

export function signIn(data) {
  return axios.post("/auth/sign-in", data);
}

export function GetProducts(page = 1) {
  return axios
    .get(`/products?page=${page}`)
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
