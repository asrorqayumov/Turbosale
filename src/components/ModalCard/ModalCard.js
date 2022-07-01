import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import CardModal from "../Card/CardModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { ModalTitle, CloseButton, ModalBody, CardsWrapper,ButtonClear, IsEmpty, ImgEmpty, Title,Text} from "./style";
Modal.setAppElement('#root')
const ModalCard = ({ isOpen, setOpen }) => {
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
       <IsEmpty>
          <ImgEmpty src="https://turbosale.xyz/static/media/bag.eed07db7.svg" alt="bag" />
           <Title>Your Cart is empty</Title>
           <Text>There is nothing in your shopping cart. Let's buy something first</Text>
            <Link to='/products' className="btn btn-dark">
               Add product 
            </Link>
       </IsEmpty>
      {/* <ModalBody>
        <CardsWrapper>
          <CardModal />
          <ButtonClear href="">
            <FontAwesomeIcon icon={faTrash} style={{paddingRight:'5px'}} />
            Clear the list
          </ButtonClear>
        </CardsWrapper>
        <Link to="/" className="btn btn-orange modal-btn">
          Order
        </Link>
      </ModalBody> */}
    </Modal>
  );
};

export default ModalCard;
