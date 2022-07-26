import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddButton,
  Button,
  CountWrapper,
  FlexItem,
  Img,
  Input,
  ModalContent,
  ModalDialog,
  Price,
  SubTitle,
  Title,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { GetProduct, AddCart } from "../../api/request";
import { cardId, defProductImg } from "../../utils";
import { Toast } from "./../../utils/toastify";
import CartContext from "../../context";

const ProductDetailsCard = ({ productId, setOpen }) => {
  const navigate = useNavigate();
  let params = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const { addToCart } = useContext(CartContext);
  

  const [product, setProduct] = useState({});
  let [total, setTotal] = useState(1);
  const { img, name, price } = product;
  useEffect(() => {
    GetProduct(params.id || productId)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);
  const inputHandler = (e) => {
    setTotal(+e.target.value);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const res = await AddCart(cardId, {
          product: product,
          qty: total,
          total: total * price,
        });
        if (user) {
          addToCart(name, price);
        }
        if ((res.success = "true")) {
          Toast.fire({
            icon: "success",
            title: "Product has added",
          });
          setOpen(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/sign-in");
    }
  };
  return (
    <ModalDialog inside={productId ? "true" : "false"}>
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
  );
};

export default ProductDetailsCard;
