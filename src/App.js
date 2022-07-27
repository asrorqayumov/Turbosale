import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { RoutersPublic, Routers } from "./utils/Routes";
import Footer from "./components/Footer/footer";
import NavbarPublic from "./components/Navbar/navbarPublic";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductDetails from "./pages/productdetails/productDetails";
import { CardProvider } from "./context";
import { GetCarts, GetProducts } from "./api/request";

const App = () => {
  const [state, setState] = useState("");
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const cardId =localStorage.getItem("cardId");
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    GetCarts(cardId)
      .then((res) => {
        setCarts(res?.payload?.[0].items);
      })
      .catch((err) => console.log(err));

    GetProducts()
      .then((res) => {
        setProducts(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleAuth = (e) => {
    setState(e);
  };
  if (!token) {
    return (
      <div className="App">
        <NavbarPublic carts={carts} setCarts={setCarts} />
        <Routes>
          <Route
            path="/product/:id"
            element={<ProductDetails/>}
          />
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
      <CardProvider>
        <div className="App">
          <Navbar
            carts={carts}
            setCarts={setCarts}
            setSearchTerm={setSearchTerm}
          />
          <Sidebar handleAuth={(e) => handleAuth(e)} user={user} />
          <Routes>
            {Routers.map((item) => {
              return (
                <Route
                  key={item.title}
                  path={item.path}
                  element={
                    <item.element
                      products={products}
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
    );
  }
};

export default App;
