import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RoutersPublic, Routers } from "./utils/Routes";
import Footer from "./components/Footer/footer";
import NavbarPublic from "./components/Navbar/navbarPublic";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductDetails from "./pages/productdetails/productDetails";
import { CardProvider } from "./context/cardContext";
import { ProductProvider } from "./context/productContext";

const App = () => {
  const [state, setState] = useState("");
  const token = localStorage.getItem("token");
  const [searchTerm, setSearchTerm] = useState("");
  const handleAuth = (e) => {
    setState(e);
  };
  if (!token) {
    return (
      <ProductProvider>
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
      </ProductProvider>
    );
  } else {
    return (
      <ProductProvider>
        <CardProvider>
          <div className="App">
            <Navbar setSearchTerm={setSearchTerm} />
            <Sidebar handleAuth={(e) => handleAuth(e)} />
            <Routes>
              {Routers.map((item) => {
                return (
                  <Route
                    key={item.title}
                    path={item.path}
                    element={
                      <item.element
                        searchTerm={searchTerm}
                        handleAuth={(e) => handleAuth(e)}
                      />
                    }
                  />
                );
              })}
              <Route
                path="/products/:id"
                element={<ProductDetails setState={setState} />}
              />
            </Routes>
          </div>
        </CardProvider>
      </ProductProvider>
    );
  }
};

export default App;
