import home from "../pages/Home/home";
import signup from "../pages/auth/SignUp";
import signin from "../pages/auth/SignIn";

const Routes = [
    { id:1, title:"Home", path:'/', element: home},
    { id:2, title:"Products", path:'/products', element: 'some'},
    { id:3, title:"Contact", path:'/contact', element: 'some'},
    { id:4, title:"Sign-in", path:'/sign-in', element: signin},
    { id:5, title:"Sign-up", path:'/sign-up', element: signup},
 
]

export default Routes;