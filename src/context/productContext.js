import { createContext, useEffect, useState } from "react";
import { GetProducts } from "../api/request";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [items, setItems] = useState([]);
  const [data, setData] = useState("");
  useEffect(() => {
    GetProducts().then((res) => {
      setItems(res?.data);
    });
  }, [data]);
  const changeData = (data) => {
    setData(data);
  };
  return (
    <ProductContext.Provider value={{ items, changeData }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
