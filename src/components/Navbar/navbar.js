import React from "react";
import { NavLink } from "react-router-dom";
import Routers from "../../utils/Routes";
import { Nav, Img, Navlist, NavItem, Navright, Button, Badge } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const NavbarPublic = () => {
  return (
    <Nav>
      <NavLink to="/">
        <Img src="./brand.png"></Img>
      </NavLink>
      <Navlist>
        {Routers.map((item) => {
          if (item.title !== "Sign-in" && item.title !== "Sign-up") {
            return (
              <NavItem key={item.id}>
                <NavLink className="nav-link" to={item.path}>
                  {item.title}
                </NavLink>
              </NavItem>
            );
          }
        })}
      </Navlist>
      <Navright>
      {Routers.map((item) => {
          if (item.title == "Sign-in" || item.title == "Sign-up") {
            return (
              <NavItem key={item.id}>
                <NavLink className="nav-link" to={item.path}>
                  {item.title}
                </NavLink>
              </NavItem>
            );
          }
        })}
        <div>
          <Badge>0</Badge>
          <Button>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </div>
      </Navright>
    </Nav>
  );
};

export default NavbarPublic;
