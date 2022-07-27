import { createContext, useEffect, useState } from "react";
import {  GetCarts } from "../api/request";


const CartContext = createContext();

export function CardProvider({ children }) {
  const [items, setItems] = useState([]);
  const cardId = localStorage.getItem("cardId");
  useEffect(() => {
    GetCarts(cardId).then((data) => {
      setItems(data);
    });
  }, []);
  const addToCart = (name, price) => {
    setItems((prevState) => [...prevState,name,price ]);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
