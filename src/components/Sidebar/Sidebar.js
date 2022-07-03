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

const Sidebar = ({ user }) => {
  return (
    <Header>
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
        <ListItem>
          <Button className="btn btn-danger">
            <FontAwesomeIcon icon={faPowerOff} />
            <Span>Sign Out</Span>
          </Button>
        </ListItem>
        {user.role == "admin" ? (
          <NavLink to="/addproduct" className="nav-add-link">
            <FontAwesomeIcon icon={faCirclePlus} />
          </NavLink>
        ) : (
          ""
        )}
      </NavList>
    </Header>
  );
};

export default Sidebar;
