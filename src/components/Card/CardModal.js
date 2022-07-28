import React, { useContext, useState } from "react";
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
import defProductImg from "../../styles/productdefault.jpg";
import CartContext from "../../context/cardContext";
import { RemoveCart } from "../../api/request";

const CardModal = ({ item, item: { product } }) => {
  const cardId = localStorage.getItem("cardId");
  let [qty, setqty] = useState(+item.qty);
  const { addToCart, items } = useContext(CartContext);
  const inputHandler = (e) => {
    setqty(+e?.target?.value);
  };
  const removeHander = () => {
    const filteredItems = items.filter((item) => {
      return item.product._id !== product._id;
    });
    RemoveCart(cardId, filteredItems)
      .then((data) => addToCart(data.payload.items))
      .catch((err) => console.log(err));
  };
  return (
    <Card>
      <Img
        src={product.img !== null ? product.img : defProductImg}
        alt="product-img"
      />
      <Title> {product.name} </Title>
      <WrapperAmount>
        <BtnAmount
          onClick={() => {
            setqty((qty -= 1));
          }}
        >
          <FontAwesomeIcon icon={faMinus} />
        </BtnAmount>
        <InputAmount
          type="number"
          onChange={inputHandler}
          className="input-amount"
          name="amount"
          value={+qty}
          min="1"
        />
        <BtnAmount
          onClick={() => {
            setqty((qty += 1));
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </BtnAmount>
      </WrapperAmount>
      <Price>{product.price * qty}</Price>
      <ButtonX onClick={removeHander}>
        <FontAwesomeIcon icon={faXmark} />
      </ButtonX>
    </Card>
  );
};

export default CardModal;
