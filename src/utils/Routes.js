import Home from "../pages/Home/home";
import Signup from "../pages/auth/SignUp";
import Signin from "../pages/auth/SignIn";
import Categories from "../pages/Categories/categories";;


export const RoutersPublic = [
    { title:"Home", path:'/', element: Home},
    { title:"Product", path:'/product', element: 'some'},
    { title:"Contact", path:'/contact', element: 'some'},
    { title:"Sign-in", path:'/sign-in', element: Signin},
    { title:"Sign-up", path:'/sign-up', element: Signup},
 
]


export  const Routers = [
    { title:"Products", path:'/products', element: 'some'},
    { title:"Orders", path:'/orders', element: 'some'},
    { title:"Purchases", path:'/sales', element: 'some'},
    { title:"Help", path:'/help', element: 'some'},
    { title:"Profile", path:'/profile', element: 'some'},
    { title:"Checkout", path:'/checkout', element: 'some'},
    { title:"Categories", path:'/categories', element: Categories},
]
