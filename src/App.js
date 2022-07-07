import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RoutersPublic, Routers } from "./utils/Routes";
import Footer from "./components/Footer/footer";
import NavbarPublic from "./components/Navbar/navbarPublic";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { user } from "./utils/index";
import ProductDetails from "./pages/productdetails/productDetails";

const App = () => {
  const [state, setState] = useState("");
  const token = localStorage.getItem("token");

  const handleAuth = (e) => {
    setState(e);
  };
  if (!token) {
    return (
      <div className="App">
        <NavbarPublic />
        <Routes>
        <Route path="/product/:id" element={<ProductDetails/>} />
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
        </Routes>
      </div>
    );
  }
};

export default App;
