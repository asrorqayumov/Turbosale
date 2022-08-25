import React from "react";
import ProductDetailsCardPublic from "../../components/productDetailCard/productDetailCardPublic";
import { Details, WrapperDetails } from "./style";


const ProductDetailsPublic = () => {
  return (
    <div className={localStorage.getItem('token')?'section':'section_public'}>
      <WrapperDetails>
        <Details>
          <ProductDetailsCardPublic />
        </Details>
      </WrapperDetails>
    </div>
  );
};

export default ProductDetailsPublic;
