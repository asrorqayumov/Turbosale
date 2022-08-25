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
import { GetProduct} from "../../api/request";
import defProductImg from "../../styles/productdefault.jpg";


const ProductDetailsCardPublic = ({ productId, setOpen, }) => {
  const navigate = useNavigate();
  let params = useParams();
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
    navigate("/sign-in");
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

export default ProductDetailsCardPublic;
