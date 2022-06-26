import React, { useState, useEffect } from "react";
import {
  FormWrapper,
  Auth,
  ImgSide,
  Img,
  Text,
  Form,
  Label,
  Input,
  Icon,
  Button,
  InputChekbox,
  LabelCheckbox,
} from "./style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import IconHandler from "../../utils/IconHandler";
import { Signup } from "../../api/request";


const SignUp = () => {
  const [user, SetUser] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    await SetUser({
      fullname: e.target.fullname?.value.trim(),
      email: e.target.email?.value,
      password: e.target.password?.value,
      phone: e.target.phone?.value,
      role: e.target.role?.value,
    });

    Signup(user)
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id);
        localStorage.setItem("role", data.user.role);
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="section">
      <FormWrapper>
        <Auth className="auth-wrapper">
          <Link to="/sign-in" style={{ padding: 18 }}>
            <Img src="./brand-logo.svg" alt="logo-turbosale" />
          </Link>
          <Text>Join Turbosale</Text>
          <Form onSubmit={formSubmit}>
            <Label>
              <Input
                type="text"
                name="fullname"
                placeholder="Full name"
                required
              />
              <Icon>
                <FontAwesomeIcon icon={faUser} />
              </Icon>
            </Label>
            <Label>
              <Input type="email" name="email" placeholder="Email" required />
              <Icon>
                <FontAwesomeIcon icon={faEnvelope} />
              </Icon>
            </Label>
            <Label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <Icon onClick={(e) => IconHandler(e)}>
                <FaEye />
                <FaEyeSlash className="d-none" />
              </Icon>
            </Label>
            <Label>
              <Input type="text" name="phone" placeholder="Phone" required />
              <Icon>
                <FontAwesomeIcon icon={faPhone} />
              </Icon>
            </Label>
            <LabelCheckbox
              onClick={(e) =>
                e.currentTarget.classList.contains("c-blue")
                  ? e.currentTarget.classList.remove("c-blue")
                  : e.currentTarget.classList.add("c-blue")
              }
              htmlFor="admin"
            >
              Admin
            </LabelCheckbox>
            <InputChekbox
              type="checkbox"
              id="admin"
              value="admin"
              name="admin"
            />
            <Label>
              <Button className="btn btn-orange">Sign Up</Button>
              <Link to="/sign-in" className="auth-link">
                Sign in
              </Link>
            </Label>
          </Form>
        </Auth>
        <ImgSide className="auth-wrapper">
          <img src="./form-img.svg" />
        </ImgSide>
      </FormWrapper>
    </div>
  );
};

export default SignUp;
