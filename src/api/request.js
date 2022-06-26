import axios from "./axios";

export function GetProducts(page = 1) {
    return(
         axios.get(`/products?page=${page}`)
         .then(res=>  res.data)
         .catch(err=> err)
        )  
}

export function Signup (user){
  return axios.post('/auth/sign-up' ,{
     fullname : user.fullname,
     email : user.email,
     password : user.password,
     phone:user.phone,
     role : user.role,
   })
}

export function Signin (user){
  return  axios.post('/auth/sign-in' ,{
      email : user.email,
      password : user.password,
    })
 }
