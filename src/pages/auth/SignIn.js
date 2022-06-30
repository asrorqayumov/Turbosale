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
} from "./style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import IconHandler from "../../utils/IconHandler";
import { signIn } from "../../api/request";
import { Toast } from "../../utils/toastify";


const SignIn = (props) => {
  const [user, SetUser] = useState({
    email: "",
    password: "",
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    await SetUser({
      email: e.target.email.value,
      password: e.target.password.value,
    });

    signIn(user)
      .then((res) => {
         if (res.data.success) {
           localStorage.setItem("token", res.data.token);
           localStorage.setItem("userId", res.data.payload._id);
           Toast.fire({
             icon: 'success',
             title: 'Success'
           })
         } else{
          Toast.fire({
            icon: 'error',
            title: `${res.data.msg}`
          }) 
         }
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: `${err.response.data.msg}`
        }) 
      });
  };

  return (
    <div className="section">
      <FormWrapper>
        <Auth className="auth-wrapper">
          <Link to="/sign-up" style={{ padding: 18 }}>
            <Img src="./brand-logo.svg" alt="logo-turbosale" />
          </Link>
          <Text>Sign in</Text>
          <Form onSubmit={formSubmit}>
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
              <Button className="btn btn-orange">Sign in</Button>
              <Link to="/sign-up" className="auth-link">
                Sign up
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

export default SignIn;
