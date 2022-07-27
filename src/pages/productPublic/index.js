import React,{useState,useEffect} from "react";
import Card from "../../components/Card/Card";
import { GetProducts } from "../../api/request";
import { CardWrapper } from './../Home/style';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
       GetProducts()
       .then(res=>{
         setProducts(res.data)
       });
    },[])  
  return (
    <div className="section_public">
      <CardWrapper>
         {products.map((item)=>{
         return <Card public='true' path='product' key={item._id} product={item} />
         })}
      </CardWrapper>
    </div>
  );
};

export default Home;
