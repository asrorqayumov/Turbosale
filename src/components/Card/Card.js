import React from "react";
import {
  CardW,
  CardImgW,
  CardImg,
  CardInfo,
  CardTitle,
  CardPrice,
  CardPriceItem,
  CardIcon,
} from "./style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { defProductImg } from "../../utils";

const Card = ({product:{img,name,price,_id}}) => {
  return (
    <CardW>
      <CardImgW>
        <Link to={`/product/${_id}`}>
          <CardImg src={img||defProductImg} />
        </Link>
      </CardImgW>
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardPrice>
          <CardPriceItem>{price}</CardPriceItem>
        </CardPrice>
        <Link to="/" className="card-btn">
          <CardIcon>
            <FontAwesomeIcon icon={faCartShopping} />
          </CardIcon>
        </Link>
      </CardInfo>
    </CardW>
  );
};

export default Card;
