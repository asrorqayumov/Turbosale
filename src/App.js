import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RoutersPublic, Routers } from "./utils/Routes";
import Footer from "./components/Footer/footer";
import NavbarPublic from "./components/Navbar/navbarPublic";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { user } from "./utils/index";
import ProductDetails from "./pages/productdetails/productDetails";
import IsPublicContext from "./context/isPublicContext";
const App = () => {
  const [state, setState] = useState("");
  const token = localStorage.getItem('token');
  const handleAuth = (e) => {
    setState(e);
  };
  if (!token) {
    return (
      <IsPublicContext.Provider value={true}>
        <div className="App">
          <NavbarPublic />
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
            {RoutersPublic.map((item) => {
              return (
                <Route  
                  key={item.title}
                  path={item.path}
                  element={<item.element handleAuth={(e) => handleAuth(e)} />}
                />
              );
            })}
          </Routes>
          <Footer />
        </div>
       </IsPublicContext.Provider>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <Sidebar handleAuth={(e) => handleAuth(e)} user={user} />
        <Routes>
          {Routers.map((item) => {
            return (
              <Route
                key={item.title}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    );
  }
};

export default App;
