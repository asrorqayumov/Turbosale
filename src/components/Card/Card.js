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

const Card = ({imgUrl}) => {
  return (
    <CardW>
      <CardImgW>
        <CardImg src={imgUrl} />
      </CardImgW>
      <CardInfo>
        <CardTitle>Card Title</CardTitle>
        <CardPrice>
          <CardPriceItem>4044</CardPriceItem>
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
