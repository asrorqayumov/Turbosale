import React from "react";
import { NavLink } from "react-router-dom";
import {RoutersPublic} from "../../utils/Routes";
import { Nav, Img, Navlist, NavItem, Navright, Button, Badge } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ModalCard from "../ModalCard/ModalCard";
const NavbarPublic = ({carts,setCarts}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = ()=>{
      setIsOpen(true);
  }
  return (
    <Nav public >
       <ModalCard isOpen={modalIsOpen} carts={carts} setCarts={setCarts}  setOpen={setIsOpen} />
      <NavLink to="/">
        <Img src="./brand.png"></Img>
      </NavLink>
      <Navlist>
        {RoutersPublic.map((item) => {
          if (item.title !== "Sign-in" && item.title !== "Sign-up"  && item.title !== "Cart") {
            return (
              <NavItem key={item.title}>
                <NavLink className="nav-link" to={item.path}>
                  {item.title}
                </NavLink>
              </NavItem>
            );
          }
        })}
      </Navlist>
      <Navright public>
      {RoutersPublic.map((item) => {
          if (item.title == "Sign-in" || item.title == "Sign-up") {
            return (
              <NavItem key={item.title}>
                <NavLink className="nav-link" to={item.path}>
                  {item.title}
                </NavLink>
              </NavItem>
            );
          }
        })}
        <div>
          <Badge public>{carts.length}</Badge>
          <Button onClick={openModal} public>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </div>
      </Navright>
    </Nav>
  );
};

export default NavbarPublic;
