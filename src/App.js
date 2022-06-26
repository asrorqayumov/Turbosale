import React, {useState, useEffect}from "react";
import { Routes, Route } from "react-router-dom";
import Routers from './utils/Routes';
import  Footer  from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
// import jwtDecode from 'jwt-decode';

const App = () => {
  const [user,setUser] = useState({});
  const [userRole, setUserRole] = useState('')

  useEffect(() => {
    try{
      const jwt = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      // const userData = jwtDecode(jwt);
      //  setUser(userData)
       setUserRole(role)
    }
    catch(ex){

    }
  })
  return (
    <div className="App">
      <Navbar role={userRole} />
        <Routes>
          {Routers.map((item)=>{
             return <Route key={item.id} path={item.path} element={<item.element />} />
          })}
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
