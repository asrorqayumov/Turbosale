import React,{ useContext} from "react";
import Card from "../../components/Card/Card";
import ProductContext from "../../context/productContext";
import { CardWrapper } from './../Home/style';

const Home = () => {
   const {items} = useContext(ProductContext)
  return (
    <div className="section_public">
      <CardWrapper>
         {items.map((item)=>{
         return <Card public='true' path='product' key={item._id} product={item} />
         })}
      </CardWrapper>
    </div>
  );
};

export default Home;
