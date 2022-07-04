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
        <Card imgUrl="https://api.turbosale.xyz/var/www/uploads/products/5e8693c4a9ad582dbbabc1cb/_eSOgukTVVQWPA80fGmtm.jpg" />
        <Card imgUrl="https://api.turbosale.xyz/var/www/uploads/products/5e8693c4a9ad582dbbabc1cb/_eSOgukTVVQWPA80fGmtm.jpg" />
        <Card imgUrl="https://api.turbosale.xyz/var/www/uploads/products/5e8693c4a9ad582dbbabc1cb/_eSOgukTVVQWPA80fGmtm.jpg" />
        <Card imgUrl="https://api.turbosale.xyz/var/www/uploads/products/5e8693c4a9ad582dbbabc1cb/_eSOgukTVVQWPA80fGmtm.jpg" />
      </CardWrapper>
    </div>
  );
};

export default Home;
