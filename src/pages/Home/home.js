import React from "react";
import Carousel from "../../components/Carousel/carousel";
import Card from "../../components/Card/Card";
import { CardWrapper } from "./style";
import { useContext } from "react";
import ProductContext from "../../context/productContext";


const Home = () => {
  const {items} = useContext(ProductContext)
  return (
    <div className="section_public">
      <Carousel />
      <CardWrapper>
        {items.map((item) => {
          return (
            <Card public="true" path="product" key={item._id} product={item} />
          );
        })}
      </CardWrapper>
    </div>
  );
};

export default Home;
