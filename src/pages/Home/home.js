import React,{useState,useEffect} from "react";
import Carousel from "../../components/Carousel/carousel";
import Card from "../../components/Card/Card";
import { CardWrapper } from "./style";
import { GetProducts } from "../../api/request";

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
      <Carousel />
      <CardWrapper>
         {products.map((item)=>{
         return <Card key={item._id} product={item} />
         })}
      </CardWrapper>
    </div>
  );
};

export default Home;
