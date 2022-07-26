import React, { useEffect, useState } from "react";
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

const Navbar = ({ setSearchTerm,carts, setCarts }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const defImg = "./user-img.png";
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <Nav shadow>
      <ModalCard
        isOpen={modalIsOpen}
        carts={carts}
        setCarts={setCarts}
        setOpen={setIsOpen}
      />
      <NavLeft>
        <NavLink to="/products">
          <ImgRocket src="./favicon.png" />
        </NavLink>
        <Input
         placeholder="Search..." 
         type="search" 
         onChange={(e)=>setSearchTerm(e.target.value)}
         />
      </NavLeft>
      <Navright>
        <NavLink to="/profile" className="profile-img">
          <ProfilInfo>
            <Small>{user.email}</Small>
            <Small>{user.role == "admin" ? "Admin" : "Customer"}</Small>
          </ProfilInfo>
          <ImgCircle src={user.img || defImg} alt="user image" />
        </NavLink>
        <div>
          <Badge>{carts?.length || 0}</Badge>
          <Button onClick={openModal}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </div>
      </Navright>
    </Nav>
  );
};

export default Navbar;
