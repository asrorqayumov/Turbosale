import React from "react";
import { Details, WrapperDetails } from "./style";
import ProductDetailsCard from "../../components/productDetailCard";

const ProductDetails = () => {
  return (
    <div className={localStorage.getItem('token')?'section':'section_public'}>
      <WrapperDetails>
        <Details>
          <ProductDetailsCard />
        </Details>
      </WrapperDetails>
    </div>
  );
};

export default ProductDetails;
