import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from "react-modal";
import ProductDetailsCard from './../productDetailCard/index';
import { BtnX, WrapperX } from "./style";

const AddCardModal = ({ productId, isOpen, setOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={setOpen}
      style={{
        overlay: {
          justifyContent: "center",
          alignItems: "center", 
        },
      }}
      className="create_product_modal"
    >
        <WrapperX>
          <BtnX onClick={() => setOpen(false)} className="btn">
            <FontAwesomeIcon icon={faXmark} />
          </BtnX>
        </WrapperX>
       <ProductDetailsCard productId={productId} setOpen={setOpen} />
    </Modal>
  );
};

AddCardModal.propTypes = {};

export default AddCardModal;
