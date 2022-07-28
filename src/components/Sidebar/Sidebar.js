import React from "react";
import { NavLink } from "react-router-dom";
import { Header, Img, NavList, Logo, ListItem, Span, Button } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTag,
  faBagShopping,
  faCircleQuestion,
  faPowerOff,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import CreateProductModal from "../ModalCard/CreateProductModal";

const Sidebar = ({ handleAuth }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const openModal = () => {
    setIsOpen(true);
  };
  const handleSignOut = () => {
    localStorage.clear();
    handleAuth();
  };
  return (
    <Header>
      <CreateProductModal isOpen={modalIsOpen} setOpen={setIsOpen} />
      <Logo>
        <NavLink to="/products">
          <Img src="brand.png" />
        </NavLink>
      </Logo>
      <NavList>
        <ListItem>
          <NavLink className="nav-sidebar-link" to="/products">
            <FontAwesomeIcon icon={faCartShopping} />
            <Span>Products</Span>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink className="nav-sidebar-link" to="/orders">
            <FontAwesomeIcon icon={faTag} />
            <Span>Orders</Span>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink className="nav-sidebar-link" to="/sales">
            <FontAwesomeIcon icon={faBagShopping} />
            <Span>Purchases</Span>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink className="nav-sidebar-link" to="/help">
            <FontAwesomeIcon icon={faCircleQuestion} />
            <Span>Help</Span>
          </NavLink>
        </ListItem>
        {user.role == "admin" ? (
          <ListItem>
            <NavLink className="nav-sidebar-link" to="/categories">
              <FontAwesomeIcon icon={faCirclePlus} />
              <Span>Categories</Span>
            </NavLink>
          </ListItem>
        ) : (
          ""
        )}
        <ListItem>
          <Button onClick={handleSignOut} className="btn btn-danger">
            <FontAwesomeIcon icon={faPowerOff} />
            <Span>Sign Out</Span>
          </Button>
        </ListItem>
        {user.role == "admin" ? (
          <button onClick={openModal} className="nav-add-link ">
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        ) : (
          ""
        )}
      </NavList>
    </Header>
  );
};

export default Sidebar;
