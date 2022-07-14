import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  Img,
  WrapperAmount,
  BtnAmount,
  InputAmount,
  ButtonX,
  Title,
  Price,
} from "./style";
import { AddCart } from "../../api/request";

const CardModal = ({ setCarts, item, item: { product } }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  let [total, setTotal] = useState(+item.total);
  const inputHandler = async (e) => {
    setTotal(+e?.target?.value);
  };

  const removeHander = ()=>{
       
  }

  return (
    <Card>
      <Img src={product.img} alt="product-img" />
      <Title> {product.name} </Title>
      <WrapperAmount>
        <BtnAmount
          onClick={() => {
            setTotal((total -= 1));
          }}
        >
          <FontAwesomeIcon icon={faMinus} />
        </BtnAmount>
        <InputAmount
          type="number"
          onChange={inputHandler}
          className="input-amount"
          name="amount"
          value={+total}
          min="1"
        />
        <BtnAmount
          onClick={() => {
            setTotal((total += 1));
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </BtnAmount>
      </WrapperAmount>
      <Price>{product.price * +total}</Price>
      <ButtonX onClick={removeHander}>
        <FontAwesomeIcon icon={faXmark} />
      </ButtonX>
    </Card>
  );
};

export default CardModal;
