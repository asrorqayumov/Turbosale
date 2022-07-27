import React from "react";
import { NavLink } from "react-router-dom";
import {RoutersPublic} from "../../utils/Routes";
import { Nav, Img, Navlist, NavItem, Navright,} from "./style";
const NavbarPublic = () => {
  return (
    <Nav public >
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
      </Navright>
    </Nav>
  );
};

export default NavbarPublic;
