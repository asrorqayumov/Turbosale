import React, { useState } from "react";
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
import { signUpRequest } from "../../api/request";
import { Toast } from "../../utils/toastify";

const SignUp = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });
  const inputHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpRequest(user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      Toast.fire({
        icon: "success",
        title: "Success",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: `${error.response?.data.msg}`,
      });
    }
  };
  const { email, fullName, password, phone } = user;
  return (
    <div className="section">
      <FormWrapper>
        <Auth className="auth-wrapper">
          <Link to="/sign-in" style={{ padding: 18 }}>
            <Img src="./brand-logo.svg" alt="logo-turbosale" />
          </Link>
          <Text>Join Turbosale</Text>
          <Form onSubmit={formHandler}>
            <Label>
              <Input
                onChange={inputHandler}
                type="text"
                name="fullName"
                value={fullName}
                placeholder="FullName"
                required
              />
              <Icon>
                <FontAwesomeIcon icon={faUser} />
              </Icon>
            </Label>
            <Label>
              <Input
                onChange={inputHandler}
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                required
              />
              <Icon>
                <FontAwesomeIcon icon={faEnvelope} />
              </Icon>
            </Label>
            <Label>
              <Input
                onChange={inputHandler}
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                required
              />
              <Icon onClick={(e) => IconHandler(e)}>
                <FaEye />
                <FaEyeSlash className="d-none" />
              </Icon>
            </Label>
            <Label>
              <Input
                onChange={inputHandler}
                type="text"
                name="phone"
                value={phone}
                placeholder="Phone"
                required
              />
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
              value="admin"
            >
              Admin
            </LabelCheckbox>
            <InputChekbox
              type="checkbox"
              id="admin"
              value="admin"
              name="role"
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
