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
import { AddCart } from "../../api/request";
import { Toast } from "./../../utils/toastify";

const ProductDetails = () => {
  let params = useParams();
  const [product, setProduct] = useState({});
  let [total, setTotal] = useState(1);
  useEffect(() => {
    GetProduct(params.id)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);
  const inputHandler = (e) => {
    setTotal(e.target.value);
  };
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await AddCart(params.id, {
         product: {...product},
         total: total,
         qty: total*product.price,
      });
      if (res.success='true') {
        Toast.fire({
          icon: "success",
          title: "Product has added",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { img, name, price } = product;
  return (
    <div className="section_public">
      <WrapperDetails>
        <Details>
          <ModalDialog>
            <ModalContent left>
              <Img src={img || defProductImg} alt="product-img" />
            </ModalContent>
            <ModalContent>
              <form action="" onSubmit={formHandler}>
                <Title>{name}</Title>
                <SubTitle>1 piece / by</SubTitle>
                <SubTitle>
                  SIZGA KO'RSATILGAN NARX BIR DONA UCHUN BELGILANGAN.
                </SubTitle>
                <FlexItem>
                  <CountWrapper>
                    <Button onClick={() => setTotal((total -= 1))}>
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <Input
                      type="number"
                      min={1}
                      onChange={inputHandler}
                      name="amount"
                      value={total}
                    />
                    <Button onClick={() => setTotal((total += 1))}>
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </CountWrapper>
                </FlexItem>
                <Price>{price * total}</Price>
                <AddButton className="card-btn">Add to card</AddButton>
              </form>
            </ModalContent>
          </ModalDialog>
        </Details>
      </WrapperDetails>
    </div>
  );
};

export default ProductDetails;
