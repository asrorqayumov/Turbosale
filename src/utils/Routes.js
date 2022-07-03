import Home from "../pages/Home/home";
import Signup from "../pages/auth/SignUp";
import Signin from "../pages/auth/SignIn";
import { faCartShopping ,faTag,faBagShopping,faCircleQuestion} from "@fortawesome/free-solid-svg-icons";


export const RoutersPublic = [
    { id:1, title:"Home", path:'/', element: Home},
    { id:2, title:"Products", path:'/products', element: 'some'},
    { id:3, title:"Contact", path:'/contact', element: 'some'},
    { id:4, title:"Sign-in", path:'/sign-in', element: Signin},
    { id:5, title:"Sign-up", path:'/sign-up', element: Signup},
 
]


export  const Routers = [
    { title:"Products", path:'/products', element: 'some'},
    { title:"Orders", path:'/orders', element: 'some'},
    { title:"Purchases", path:'/sales', element: 'some'},
    { title:"Help", path:'/help', element: 'some'},
    { title:"Profile", path:'/profile', element: 'some'},
    { title:"Checkout", path:'/checkout', element: 'some'},
]
