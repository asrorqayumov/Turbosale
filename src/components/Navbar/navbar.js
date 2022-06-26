import React from "react";
import Routes from "../../utils/Routes";
import { NavLink } from "react-router-dom";
import { Nav, Img, Navlist, NavItem, Navright, Button, Badge } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <Img src="./brand.png"></Img>
      </NavLink>
      <Navlist>
        {Routes.map((e) => {
          return (
            <NavItem key={e.id}>
              <NavLink className="nav-link" to={e.path}>
                {e.title}
              </NavLink>
            </NavItem>
          );
        })}
      </Navlist>
      <Navright>
        <Badge>0</Badge>
        <Button>
          <FontAwesomeIcon icon={faCartShopping} />
        </Button>
      </Navright>
    </Nav>
  );
};

export default Navbar;
