import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AddButton,
  Button,
  CountWrapper,
  Details,
  FlexItem,
  Img,
  Input,
  ModalContent,
  ModalDialog,
  Price,
  SubTitle,
  Title,
  WrapperDetails,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { GetProduct } from "../../api/request";
import { defProductImg } from "../../utils";

const ProductDetails = () => {
  let params = useParams();
  const [product, setProduct] = useState({});
  const [total,setTotal] = useState(null)

  useEffect(() => {
    GetProduct(params.id)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  });
  const {img,name,price} = product
  return (
    <div className="section_public">
      <WrapperDetails>
        <Details>
          <ModalDialog>
            <ModalContent left>
              <Img src={img || defProductImg} alt="product-img" />
            </ModalContent>
            <ModalContent>
              <Title>{name}</Title>
              <SubTitle>1 piece / by</SubTitle>
              <SubTitle>SIZGA KO'RSATILGAN NARX BIR KILOGRAM ARQON UCHUN BELGILANGAN</SubTitle>
              <FlexItem>
                <CountWrapper>
                  <Button>
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                  <Input type="number" name="amount" defaultValue="1" />
                  <Button>
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </CountWrapper>
              </FlexItem>
              <Price>{price}</Price>
              <AddButton className="card-btn">Add to card</AddButton>
            </ModalContent>
          </ModalDialog>
        </Details>
      </WrapperDetails>
    </div>
  );
};

export default ProductDetails;
