import React from "react";
import { Routes, Route } from "react-router-dom";
  import {RoutersPublic,Routers} from "./utils/Routes";
import Footer from "./components/Footer/footer";
import NavbarPublic from "./components/Navbar/navbarPublic";
import Navbar from './components/Navbar/navbar';
import Sidebar from "./components/Sidebar/Sidebar";
import { user } from "./utils/index";


const App = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return (
      <div className="App">
        <NavbarPublic />
        <Routes>
          {RoutersPublic.map((item) => {
            return (
              <Route
                key={item.title}
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
      <Navbar />
      <Sidebar user={user} />
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
