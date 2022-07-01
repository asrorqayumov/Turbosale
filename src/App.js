import React from "react";
import { Routes, Route } from "react-router-dom";
  import {RoutersPublic,Routers} from "./utils/Routes";
import Footer from "./components/Footer/footer";
import NavbarPublic from "./components/Navbar/navbar";


const App = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return (
      <div className="App">
        <NavbarPublic />
        <Routes>
          {RoutersPublic.map((item) => {
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
  return (
    <div className="App">
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
};

export default App;
