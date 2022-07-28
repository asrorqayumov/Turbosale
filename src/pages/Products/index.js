import React from "react";
import { useContext } from "react";
import Card from "../../components/Card/Card";
import ProductContext from "../../context/productContext";
import { CardWrapper } from "../Home/style";

const Products = ({searchTerm}) => {
  const {items} = useContext(ProductContext)
  return (
    <div className="section">
      <CardWrapper>
         {items.filter((val)=>{
             if (searchTerm == '') {
               return val
             } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
             }
         }).map((item)=>{
           return <Card path='products' key={item._id} product={item} />
         })}
      </CardWrapper>
    </div>
  );
};

export default Products;