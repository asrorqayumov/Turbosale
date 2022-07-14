import React from "react";
import Card from "../../components/Card/Card";
import { CardWrapper } from "../Home/style";

const Products = ({products,searchTerm}) => {
  return (
    <div className="section">
      <CardWrapper>
         {products.filter((val)=>{
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