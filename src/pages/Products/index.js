import React,{useState,useEffect} from "react";
import Card from "../../components/Card/Card";
import { CardWrapper } from "../Home/style";
import { GetProducts } from "../../api/request";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
       GetProducts()
       .then(res=>{
         setProducts(res.data)
       });
    },[])
  return (
    <div className="section">
      <CardWrapper>
         {products.map((item)=>{
         return <Card path='products' key={item._id} product={item} />
         })}
      </CardWrapper>
    </div>
  );
};

export default Products;