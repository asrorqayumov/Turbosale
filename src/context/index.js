import { createContext, useEffect, useState } from "react";
import { AddCart, GetCarts } from "../api/request";
import { cardId } from "../utils";

const CartContext = createContext();

export function CardProvider({ children }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    GetCarts(cardId).then((data) => {
      setItems(data);
    });
  }, []);
  const addToCart = (name, price) => {
    setItems((prevState) => [...prevState, ]);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;