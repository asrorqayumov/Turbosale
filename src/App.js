import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Routers from "./utils/Routes";
import Footer from "./components/Footer/footer";
import NavbarPublic from "./components/Navbar/navbar";


const App = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return (
      <div className="App">
        <NavbarPublic />
        <Routes>
          {Routers.map((item) => {
            return (
              <Route
                key={item.id}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
        </Routes>
        <Footer />
      </div>
    );
  }
  return <h1>Salom</h1>;
};

export default App;
