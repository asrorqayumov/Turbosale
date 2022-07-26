import React from "react";
import { Link } from "react-router-dom";
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

Modal.setAppElement("#root");
const ModalCard = ({ carts, setCarts, isOpen, setOpen }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const clearCart = async () => {
    const res = await ClearCart(user._id)
      .then((res) => {
        setCarts(res?.payload?.items);
      })
      .catch((err) => console.log(err));
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
      { carts !== undefined && carts?.length != 0 ? (
        <ModalBody>
          <CardsWrapper>
            {carts?.map((item) => {
              return (
                <CardModal
                  key={item.product._id}
                  setCarts={setCarts}
                  item={item}
                />
              );
            })}
            <ButtonClear onClick={clearCart}>
              <FontAwesomeIcon icon={faTrash} style={{ paddingRight: "5px" }} />
              Clear the list
            </ButtonClear>
          </CardsWrapper>
          <button className="btn btn-orange modal-btn">
            {carts?.reduce((pre, curr) => {
              return pre + curr.total * curr.product.price;
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
          <Link to="/products" className="btn btn-dark">
            Add product
          </Link>
        </IsEmpty>
      )}
    </Modal>
  );
};

export default ModalCard;
