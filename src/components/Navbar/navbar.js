import React from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  ImgRocket,
  Button,
  Badge,
  Input,
  ImgCircle,
  ProfilInfo,
  Small,
  Navright,
  NavLeft,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ModalCard from "../ModalCard/ModalCard";
import {defImg,user} from '../../utils/index';

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <Nav shadow >
      <ModalCard isOpen={modalIsOpen} setOpen={setIsOpen} />
      <NavLeft>
      <NavLink to="/products">
        <ImgRocket src="./favicon.png" />
      </NavLink>
      <Input placeholder="Search..." type="search" />
      </NavLeft>
      <Navright>
        <NavLink to="/profile" className="profile-img">
          <ProfilInfo>
            <Small>{user.email}</Small>
            <Small>{user.role=='admin'?'Admin':'Customer'}</Small>
          </ProfilInfo>
          <ImgCircle src={user.img || defImg} alt="user image" />
        </NavLink>
        <div>
          <Badge>0</Badge>
          <Button onClick={openModal}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </div>
      </Navright>
    </Nav>
  );
};

export default Navbar;
