// outside
import Home from "../pages/Home/home";
import Signup from "../pages/auth/SignUp";
import Signin from "../pages/auth/SignIn";
import Card from '../pages/cart'
import ProductPublic from '../pages/productPublic'
// Inside
import Categories from "../pages/Categories/categories";
import Products from '../pages/Products/index'


export const RoutersPublic = [
    { title:"Home", path:'/', element: Home},
    { title:"Product", path:'/product', element: ProductPublic},
    { title:"Contact", path:'/contact', element: 'some'},
    { title:"Cart", path:'/cart', element: Card},
    { title:"Sign-in", path:'/sign-in', element: Signin},
    { title:"Sign-up", path:'/sign-up', element: Signup},
]


export  const Routers = [
    { title:"Products", path:'/products', element: Products},
    { title:"Orders", path:'/orders', element: 'some'},
    { title:"Purchases", path:'/sales', element: 'some'},
    { title:"Help", path:'/help', element: 'some'},
    { title:"Profile", path:'/profile', element: 'some'},
    { title:"Checkout", path:'/checkout', element: 'some'},
    { title:"Categories", path:'/categories', element: Categories},
]
