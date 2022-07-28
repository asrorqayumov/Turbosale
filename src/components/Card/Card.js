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
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import defProductImg  from "../../styles/productdefault.jpg";
import AddCardModal from "../ModalCard/AddCardModal";
import { token } from "../../utils";

const Card = ({ path, product: { img, name, price, _id } }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <AddCardModal productId={_id} isOpen={modalIsOpen} setOpen={setIsOpen} />
      <CardW>
        <CardImgW>
          <Link to={`/${path}/${_id}`}>
            <CardImg src={img || defProductImg} />
          </Link>
        </CardImgW>
        <CardInfo>
          <CardTitle>{name}</CardTitle>
          <CardPrice>
            <CardPriceItem>{price}</CardPriceItem>
          </CardPrice>
          {token ? (
            <button className="card-btn" onClick={openModal}>
              <CardIcon>
                <FontAwesomeIcon icon={faCartShopping} />
              </CardIcon>
            </button>
          ) : (
            <button onClick={() => navigate("/sign-in")} className="card-btn">
              <CardIcon>
                <FontAwesomeIcon icon={faCartShopping} />
              </CardIcon>
            </button>
          )}
        </CardInfo>
      </CardW>
    </>
  );
};

export default Card;
