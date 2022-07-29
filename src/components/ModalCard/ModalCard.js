import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import CardModal from "../Card/CardModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  ModalTitle,
  CloseButton,
  ModalBody,
  CardsWrapper,
  ButtonClear,
  IsEmpty,
  ImgEmpty,
  Title,
  Text,
} from "./style";
import { ClearCart } from "../../api/request";
import { useContext } from "react";
import CartContext from "../../context/cardContext";

Modal.setAppElement("#root");
const ModalCard = ({ isOpen, setOpen }) => {
  const navigate = useNavigate();
  const cardId = localStorage.getItem("cardId");
  const { items, addToCart } = useContext(CartContext);
 
   
  
  const clearCart = async () => {
    ClearCart(cardId)
      .then((res) => {
        addToCart(res?.payload?.items);
      })
      .catch((err) => console.log(err));
  };
  const navigateHandler = () => {
    navigate("/products");
    setOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={setOpen}
      className="react-card-modal"
    >
      <ModalTitle>
        <h2>My Cart</h2>
        <CloseButton onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </CloseButton>
      </ModalTitle>
      {items !== undefined && items?.length != 0 ? (
        <ModalBody>
          <CardsWrapper>
            {items?.map((item) => {
              return <CardModal key={item.product._id} item={item} />;
            })}
            <ButtonClear onClick={clearCart}>
              <FontAwesomeIcon icon={faTrash} style={{ paddingRight: "5px" }} />
              Clear the list
            </ButtonClear>
          </CardsWrapper>
          <button className="btn btn-orange modal-btn">
            {items?.reduce((acc, curr) => {
              return acc + curr.total;
            }, 0)}{" "}
            Order
          </button>
        </ModalBody>
      ) : (
        <IsEmpty>
          <ImgEmpty
            src="https://turbosale.xyz/static/media/bag.eed07db7.svg"
            alt="bag"
          />
          <Title>Your Cart is empty</Title>
          <Text>
            There is nothing in your shopping cart. Let's buy something first
          </Text>
          <button onClick={navigateHandler} className="btn btn-dark">
            Add product
          </button>
        </IsEmpty>
      )}
    </Modal>
  );
};

export default ModalCard;
