import React from "react";
import { Details, WrapperDetails } from "./style";
import ProductDetailsCard from "../../components/productDetailCard";

const ProductDetails = ({ setState }) => {
  return (
    <div className={localStorage.getItem('token')?'section':'section_public'}>
      <WrapperDetails>
        <Details>
          <ProductDetailsCard setState={setState} />
        </Details>
      </WrapperDetails>
    </div>
  );
};

export default ProductDetails;
