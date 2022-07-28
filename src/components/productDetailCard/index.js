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
import { Toast } from "./../../utils/toastify";
import defProductImg from "../../styles/productdefault.jpg";
import CartContext from "../../context/cardContext";

const ProductDetailsCard = ({ productId, setOpen }) => {
  const navigate = useNavigate();
  let params = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const cardId = localStorage.getItem("cardId");
  const { changeData } = useContext(CartContext);
  const [product, setProduct] = useState({});
  let [qty, setqty] = useState(1);
  useEffect(() => {
    GetProduct(params.id || productId)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);
  const inputHandler = (e) => {
    setqty(+e.target.value);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const res = await AddCart(cardId, {
          product: product,
          qty: qty,
          total: qty * price,
        });
        changeData(name);
        if ((res.success = "true")) {
          Toast.fire({
            icon: "success",
            title: "Product has added",
          });
          productId ? setOpen(false) : setOpen(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/sign-in");
    }
  };
  const { img, name, price } = product;
  return (
    <ModalDialog inside={productId ? "true" : "false"}>
      <ModalContent left>
        <Img src={img ? img : defProductImg} alt="product-img" />
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
              <Button onClick={() => setqty((qty -= 1))}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <Input
                type="number"
                min={1}
                onChange={inputHandler}
                name="amount"
                value={qty}
              />
              <Button onClick={() => setqty((qty += 1))}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </CountWrapper>
          </FlexItem>
          <Price>{price * qty}</Price>
          <AddButton className="card-btn">Add to card</AddButton>
        </form>
      </ModalContent>
    </ModalDialog>
  );
};

export default ProductDetailsCard;
