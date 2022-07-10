import React,{useContext} from "react";
import { Details, WrapperDetails } from "./style";
import ProductDetailsCard from "../../components/productDetailCard"; 
import {IsPublicContext} from "../../context";

const ProductDetails = () => {
    const IsPublic =  useContext(IsPublicContext)
  return (
    <div className={IsPublic?'section_public':'section'}>
      <WrapperDetails>
        <Details>
          <ProductDetailsCard />
        </Details>
      </WrapperDetails>
    </div>
  );
};

export default ProductDetails;
