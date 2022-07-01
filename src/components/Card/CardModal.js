import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  Img,
  WrapperAmount,
  BtnAmount,
  InputAmount,
  ButtonX,
} from "./style";
const CardModal = () => {
  return (
    <Card>
      <Img
        src="https://api.turbosale.xyz/var/www/uploads/products/5e8693c4a9ad582dbbabc1cb/_eSOgukTVVQWPA80fGmtm.jpg"
        alt="product-img"
      />
      <p>product title </p>
      <WrapperAmount>
        <BtnAmount>
          <FontAwesomeIcon icon={faMinus} />
        </BtnAmount>
        <InputAmount
          defaultValue={1}
          type="number"
          className="input-amount"
          placeholder="0"
          name="amount"
        />
        <BtnAmount>
          <FontAwesomeIcon icon={faPlus} />
        </BtnAmount>
      </WrapperAmount>
      <p>17,440</p>
      <ButtonX>
        <FontAwesomeIcon icon={faXmark} />
      </ButtonX>
    </Card>
  );
};

export default CardModal;
